// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
// window.addEventListener('load', () => audioInit());
BufferLoader = window.BufferLoader;

let bufferLoader;

function audioInit () {
    bufferLoader = new BufferLoader(
        audioCtx,
        audioFiles,
        finishedLoading
        );
    
        bufferLoader.load();
}

const playButton = document.querySelector(".tape-controls-play");

function extractNameFromUrl(url) {
    return url.replace('./', '').replace('.mp3', '').split('/')[1]
}

const increaseType = '+'
const decreaseType = '-';
const defaultDryVolume = 0;
const defaultWetVolume = 0;


const audioFiles = [
    // './bach/Basson High - Harpsichord.mp3',
    // './bach/Basson Low - Harpsichord.mp3',
    // './bach/English Horn - Harpsichord.mp3',
    // './bach/Flute - Harpsichord.mp3',
    // './bach/Oboe - Harpsichord.mp3',
    // './bach/Recorder - Harpsichord.mp3',
    './bach/Basson High-Short.mp3',
    './bach/Basson Low-Short.mp3',
    './bach/English Horn - Horns - Short.mp3',
    './bach/Flute-Short.mp3',
    './bach/Oboe-Short.mp3',
    './bach/Recorder-Clarinets-Short.mp3',
    './bach/Basson High - Long.mp3',
    './bach/Basson Low - Long.mp3',
    './bach/English Horn - Horns - Long.mp3',
    './bach/Flute - Long.mp3',
    './bach/Oboe - Long.mp3',
    './bach/Recorder - Clarinets - Long.mp3',
    
].map(file => file.replace(/ /g, ''))

let tracks;

const ws = new WebSocket("ws://" + window.location.host + "/websockets")
ws.onmessage = (event) => {
    const {volume, name, type} = JSON.parse(event.data)
    const track = tracks.find(track => track.trackName.includes(name))
    if(track) {
        const nextValue = track.changeVolumeByType(volume, type)
        changeGainLabel(nextValue, name, type)

        const response = {volume, name, type, nextValue}
        ws.send(response)
    }
}



function finishedLoading(bufferList) {
    tracks = bufferList.map(({buffer, url}) => {
        const track = new Track(buffer,url, audioCtx);

        playButton.addEventListener('click', () => {
            track.start();
        })
        
        const trackCard = new TrackCard(track)
        trackCard.addGainControl(new GainControlElement(track, track.gain.dry))
        trackCard.addGainControl(new GainControlElement(track, track.gain.wet))
        document.body.appendChild(trackCard.element);
        return track;
    })

    playButton.removeAttribute('disabled');
}

// create GainControlElement class for switching between tracks
class DualTrack {
    trackName;
    tracks = [];
    constructor(first, second, name) {
        this.tracks.push(first);
        this.tracks.push(second);
        this.trackName = name;
    }

    changeVolume(change, name) {
        const gainNodeType = 'dry';
        const positive = this.tracks.find(track => track.trackName.includes(name))
        const oposite = this.tracks.find(track => !track.trackName.includes(name))
        switch(change) {
            case '+': 
                positive.changeVolumeByType('+', gainNodeType);
                oposite.changeVolumeByType('-', gainNodeType);
            break;
            case '-': 
                positive.changeVolumeByType('-', gainNodeType);
                oposite.changeVolumeByType('+', gainNodeType);
            break;
            case '0': 
                positive.changeVolumeByType('0', gainNodeType);
                oposite.changeVolumeByType('1', gainNodeType);
            break;
            case '1': 
                positive.changeVolumeByType('1', gainNodeType);
                oposite.changeVolumeByType('0', gainNodeType);
            break;
        }
    }

    mute() {
        tracks.forEach(track => track.mute())
    }

    unmute() {
        tracks.forEach(track => track.unmute())
    }

    start() {
        tracks.forEach(track => track.start())
    }
}

// shows harpischord + long + short
class TrackGroup {
    constructor() {

    }
}

class Track {
    gain = {
        dry: {
            name: 'dry',
            value: defaultDryVolume,
            increment: 0.1,
            max: 2,
            min: 0,
            gainNode: null
        },
        wet: {
            name: 'wet',
            value: defaultWetVolume,
            increment: 0.05,
            max: 0.5,
            min: 0,
            gainNode: null
        }
    }
    source;
    limiter;
    delay;
    feedback;
    dryGain;
    wetGain;
    trackName;


    constructor(buffer, url, audioCtx) {
        this.trackName = extractNameFromUrl(url);

        // create
        this.source = audioCtx.createBufferSource()
        this.limiter = audioCtx.createDynamicsCompressor();
        this.delay = audioCtx.createDelay();
        this.feedback = audioCtx.createGain();
        this.dryGain = audioCtx.createGain();
        this.wetGain = audioCtx.createGain();

        // settings
        this.source.buffer = buffer;
        this.source.loopStart = 0;
        this.source.loopEnd = buffer.duration// - 0.0548125; // seamless looping?
        this.source.loop = true;

        this.dryGain.gain.value = defaultDryVolume;
        this.dryGain.gain.setValueAtTime(defaultDryVolume, audioCtx.currentTime);
        this.wetGain.gain.value = defaultWetVolume;
        this.wetGain.gain.setValueAtTime(defaultWetVolume, audioCtx.currentTime)

        this.feedback.gain.setValueAtTime(0.5, audioCtx.currentTime)
        this.delay.delayTime.value = 0.25;

        this.limiter.threshold.setValueAtTime(-5.0, audioCtx.currentTime); // In Decibels
        this.limiter.knee.setValueAtTime(0, audioCtx.currentTime); // In Decibels
        this.limiter.ratio.setValueAtTime(20.0, audioCtx.currentTime);  // In Decibels
        this.limiter.attack.setValueAtTime(0.001, audioCtx.currentTime); // Time is seconds
        this.limiter.release.setValueAtTime(0.1, audioCtx.currentTime); // Time is seconds


        // connect
        this.source.connect(this.dryGain)
        this.source.connect(this.delay)

        this.delay.connect(this.feedback);
        this.feedback.connect(this.delay)
        this.delay.connect(this.wetGain);

        this.wetGain.connect(this.limiter)
        this.dryGain.connect(this.limiter);

        this.limiter.connect(audioCtx.destination)

        this.gain.dry.gainNode = this.dryGain;
        this.gain.wet.gainNode = this.wetGain;
    }

    start() {
        this.source.start();
    }

    mute() {
        this.gain['dry'].value = this.gain['dry'].gainNode.gain.value;
        this.gain['wet'].value = this.gain['wet'].gainNode.gain.value;
        this.changeVolumeByType('0', 'dry')
        this.changeVolumeByType('0', 'wet')
    }

    unmute() {
        this.changeVolumeByType(this.gain['dry'].value, 'dry')
        this.changeVolumeByType(this.gain['wet'].value, 'wet')
    }

    changeVolumeByType(change, type) {
        const gainType = this.gain[type];
        const gain = gainType.gainNode.gain;
        const increment = gainType.increment;
        const rambUpTime = 0.3;

        gain.setValueAtTime(gain.value, audioCtx.currentTime);
        let nextValue = gain.value;
        switch(change) {
            case '+': nextValue = gain.value + increment; break;
            case '-': nextValue = gain.value - increment; break;
            case '0': nextValue = 0; break;
            case '1': nextValue = 1; break;
            default: nextValue = change;
        }
    
        nextValue = nextValue > gainType.max ? gainType.max : nextValue;
        nextValue = nextValue < gainType.min ? gainType.min : nextValue;
    
        gain.linearRampToValueAtTime(nextValue, audioCtx.currentTime + rambUpTime)
        return nextValue;
    }
}

class TrackCard {
    element;
    constructor(track) {
        const div = document.createElement('div')
        this.element = div;

        this.addHeader(track.trackName);

        const muteButton = new MuteToggleButton(track)
        div.appendChild(muteButton.element);
    }

    addHeader(name) {
        const h3 = document.createElement('h3')
        const link = this.createControlLink(name)
        h3.appendChild(link);
        this.element.appendChild(h3)
    }

    createControlLink(name) {
        const link = document.createElement('a');
        link.setAttribute('href', 'http://' + window.location.host + '/control.html?name=' + name)
        link.setAttribute('target', '_blank')
        link.innerText = name;
        return link;
    }

    addGainControl(gainControl) {
        this.element.appendChild(gainControl.element)
    }
}

class MuteToggleButton {
    element;
    constructor(track) {
        const mute = document.createElement('button')
        mute.innerText = 'Mute';
        mute.style.color = 'green'
        mute.addEventListener('click', (event) => {
            var el = event.target || event.srcElement;
            if(el.innerText === 'Mute') {
                track.mute();
                el.innerText = 'Unmute'
                el.style.color = 'red'
            }
            else {
                track.unmute();
                el.innerText = 'Mute'
                el.style.color = 'green'
            }
        })
        this.element = mute;
    }
}

class GainControlElement {
    element;
    constructor(track, gain) {
        const div = document.createElement('div');
        const label = document.createElement('span');
        label.innerText = gain.name;
        div.appendChild(label);

        const volume = document.createElement('span')
        volume.setAttribute('id', gain.name + ' ' + track.trackName)
        volume.innerText = gain.gainNode.gain.value;

        [increaseType, decreaseType].forEach(type => {
            const button = document.createElement('button')
            button.innerText = type;
            button.addEventListener('click', () => {
                const nextValue = track.changeVolumeByType(type, gain.name);
                const element = document.getElementById(gain.name + ' ' + track.trackName)
                element.innerText = nextValue.toFixed(2);
            })
            div.appendChild(button)
        })

        div.appendChild(volume)
        this.element = div;
    }
}


function changeGainLabel(value, name, type) {
    const el = document.getElementById(type + ' ' + name)
    if(el) {
        el.innerText = value.toFixed(2);
    }
}



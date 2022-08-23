// connect to the websocket and listen to current gain volume

function changeVolume(changeType) {
    return () => {
        const url = 'http://' + window.location.host + "/control"
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const trackName = urlParams.get('name');
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trackName, volume: changeType, type: 'dry'})
    };
    fetch(url, requestOptions).then(console.log)
    }
}

document.getElementById('increase').addEventListener('click', changeVolume('+'))
document.getElementById('decrease').addEventListener('click', changeVolume('-'))
document.getElementById('mute').addEventListener('click', changeVolume('0'))
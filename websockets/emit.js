import WebSocket from "ws";

export default function (ws, message) {
    ws.clients.forEach(function each(client) {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message)
      }
  })
  }
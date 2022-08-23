import WebSocket from "ws";
// import queryString from "query-string";

export default (expressServer) => {
  const ws = new WebSocket.Server({
    noServer: true,
    path: "/websockets",
  });

  expressServer.on("upgrade", (request, socket, head) => {
    ws.handleUpgrade(request, socket, head, (websocket) => {
      ws.emit("connection", websocket, request);
    });
  });

  ws.on(
    "connection",
    function connection(websocketConnection, connectionRequest) {
      console.log("websockets connected")
      //const [_path, params] = connectionRequest?.url?.split("?");
      //const connectionParams = queryString.parse(params);

      // NOTE: connectParams are not used here but good to understand how to get
      // to them if you need to pass data with the connection to identify it (e.g., a userId).
      //console.log(connectionParams);

      websocketConnection.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage);
        websocketConnection.send(JSON.stringify({ message: 'There be gold in them thar hills.' }));
        
      });
    }
  );

  return ws;
};

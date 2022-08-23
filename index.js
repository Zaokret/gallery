import express from "express";
import startup from "./lib/startup";
import middleware from "./middleware/index";
import logger from "./lib/logger";
import websockets from './websockets'
import emit from './websockets/emit';

startup()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 1337;

    middleware(app);

    const server = app.listen(port, () => {
      if (process.send) {
        process.send(`Server running at http://localhost:${port}\n\n`);
      }
    });

    const ws = websockets(server);

    app.put('/control', (req, res) => {
      emit(ws, JSON.stringify(req.body))
      console.log("Received put request at '/control'.")
      res.sendStatus(201)
    })

    process.on("message", (message) => {
      console.log(message);
    });
  })
  .catch((error) => {
    logger.error(error);
  });

import * as express from "express";
import * as websocket from "ws";
import { routeMessage } from "./route";
const app = express();
const port = 8737;

const wss = new websocket.Server({ port: 8738 });

wss.on('connection', function connection(ws) {
  ws.on('message', async function incoming(message) {
    let msg = JSON.parse(message.toString());
    let cmd = await routeMessage(msg);
    ws.send(cmd);
  });
});

app.use(express.static("static"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

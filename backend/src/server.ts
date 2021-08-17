import * as express from "express";
import * as WebSocket from "ws";
const app = express();
const port = 8737;

const wss = new WebSocket.Server({ port: 8738 });

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

wss.on('connection', function connection(ws) {
  let roomNumbers: number;
  ws.on('message', function incoming(message) {
    roomNumbers = message
    let numb = parseInt(roomNumbers);
    let val = getRandomInt(numb);
    let msg = JSON.stringify({ room: val, state: "true" });
    ws.send(msg);
  });
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

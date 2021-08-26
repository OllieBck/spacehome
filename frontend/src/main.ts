import { rooms } from "../../modules/rooms";
import { Message } from "../../modules/message";
import { Control } from "./control";

const socket = new WebSocket('ws://localhost:8738');

function control(cmd: Control) {
  rooms[cmd.room].main(cmd.state);
}

socket.addEventListener('open', function (event) {
  let msg: Message = {route: 'init', data: rooms.length};
  socket.send(JSON.stringify(msg));
});

socket.addEventListener('message', function (event) {
  let msg: Message = JSON.parse(event.data);
  switch (msg.route){
    case 'control':
      let cmd: Control = {room: msg.room, state: msg.data}
      control(cmd);
  }
});
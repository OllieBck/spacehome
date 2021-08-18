import { Rooms } from "./rooms";
import { Message } from "../../modules/message";
import { Control } from "./control";

const socket = new WebSocket('ws://localhost:8738');

let rooms: Rooms[] = [
  new Rooms("Hallway"),
  new Rooms("Dining-Room"),
  new Rooms("Living-Room"),
  new Rooms("Kitchen"),
  new Rooms("Bench"),
  new Rooms("Bathroom"),
  new Rooms("Office"),
  new Rooms("Landing"),
  new Rooms("PlayRoom"),
  new Rooms("GuestBath"),
  new Rooms("Laundry"),
  new Rooms("KidsRoom"), 
  new Rooms("Main"),
  new Rooms("MainBath")
];

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
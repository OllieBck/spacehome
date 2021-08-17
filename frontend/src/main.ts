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
];

function control(cmd: Control) {
  rooms[cmd.room].main(cmd.state);

}

socket.addEventListener('open', function (event) {
  socket.send(`${rooms.length}`);
});

socket.addEventListener('message', function (event) {
  let msg: Message = JSON.parse(event.data);
  switch (msg.route){
    case 'control':
      
      control(msg.data);
  }
  
});
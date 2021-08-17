const socket = new WebSocket('ws://localhost:8738');

class Rooms {
  completed = false;

  constructor(name) {
    this.name = name;
  }
  view() {
    let rect = document.getElementById(this.name);
    rect.style.fill = "#ff0000";
    rect.style.fillOpacity = "1.0";
  }
  hidden() {
    let rect = document.getElementById(this.name);
    rect.style.fill = "#3d2f00";
    rect.style.fillOpacity = "0";
  }
  main(selected) {
    if(selected) {
      this.view();
    }
    else {
      this.hidden();
    }
  }
}

let rooms = [
  new Rooms("Hallway"),
  new Rooms("Dining-Room"),
  new Rooms("Living-Room"),
  new Rooms("Kitchen"),
  new Rooms("Bench"),
  new Rooms("Bathroom"),
];

socket.addEventListener('open', function (event) {
  socket.send(`${rooms.length}`);
});

socket.addEventListener('message', function (event) {
  let msg = JSON.parse(event.data);
  rooms[msg.room].main(msg.state);
});
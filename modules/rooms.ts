let roomNames = [
    "Hallway",
    "Dining-Room",
    "Living-Room",
    "Kitchen",
    "Bench",
    "Bathroom",
    "Office",
    "Landing",
    "PlayRoom",
    "GuestBath",
    "Laundry",
    "KidsRoom", 
    "Main",
    "MainBath"
];

class Rooms {
    completed: boolean = false;
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    view() {
        let rect = document.getElementById(this.name);
        rect.classList.add('blink');
    }
    hidden() {
        let rect = document.getElementById(this.name);
        rect.classList.remove('blink');
    }
    main(selected: boolean) {
        if (selected) {
            this.view();
        }
        else {
            this.hidden();
        }
    }
}


let rooms: Rooms[] = [];

roomNames.forEach((name) => { rooms.push(new Rooms(name)); });

export {
    rooms,
    roomNames
};
export class Workspace {
    numberRooms: number;
    randomRoom: number;

    constructor(numberRooms: number) {
        this.numberRooms = numberRooms;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    getRoom(){
        let randRoomNumber = this.getRandomInt(this.numberRooms);
        return randRoomNumber;
    }
}
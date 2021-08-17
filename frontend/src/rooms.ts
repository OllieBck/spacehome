export class Rooms {
    completed: boolean = false;
    name: string;

    constructor(name: string) {
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
    main(selected: boolean) {
        if (selected) {
            this.view();
        }
        else {
            this.hidden();
        }
    }
}
import { Message } from "../../modules/message";
import { initWorkspace } from "./workspace";

export async function routeMessage (msg: Message) {
    switch (msg.route) {
        case 'init':
            let randomRoom = initWorkspace.getRoom();
            let cmd: Message = { route: 'control', data: true, room: randomRoom };
            let cmdString = JSON.stringify(cmd);
            return cmdString;
        case 'mobile-init':
            console.log("Mobile connected");
            break;
        
    }
}
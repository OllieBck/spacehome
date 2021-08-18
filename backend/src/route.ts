import { Message } from "../../modules/message";
import { Workspace } from "./workspace"

let initWorkspace: Workspace;

export async function routeMessage (msg: Message) {
    switch (msg.route) {
        case 'init':
            initWorkspace = new Workspace(msg.data);
            let randomRoom = initWorkspace.getRoom();
            let cmd: Message = { route: 'control', data: true, room: randomRoom };
            let cmdString = JSON.stringify(cmd);
            return cmdString;
    }
}
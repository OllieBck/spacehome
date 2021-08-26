import { roomNames } from "../../modules/rooms";
import { Message } from "../../modules/message";
import * as QRCode from  "qrcode-svg";

for (let room = 0; room < roomNames.length; room++){
    for (let repairNumb = 0; repairNumb < 3; repairNumb++){
        let msg: Message = {route: 'roomControl', data: repairNumb, room: room};
        let qrContent = JSON.stringify(msg);

        let qrcode = new QRCode({
            content: qrContent,
            padding: 4,
            width: 256,
            height: 256,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
        });

      qrcode.save(`./qrcodes/${roomNames[room]}-${repairNumb}.svg`, function (error:any) {
        if (error) throw error;
        console.log(`Created ${roomNames[room]}-${repairNumb}.svg`);
      });
    }
}

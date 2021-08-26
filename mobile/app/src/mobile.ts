/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
import { Message } from "../../../modules/message";

const socket = new WebSocket("ws://192.168.0.21:8738");

document.addEventListener("deviceready", onDeviceReady, false);
socket.addEventListener("message", processMessage, false);

function onDeviceReady() {
  //let btn = document.getElementById("btn");
  //btn.addEventListener("click", sendWS);
  QRScanner.prepare(onDone);
}

function socketOpen(e:any) {
  let msg: Message
  msg.route = "mobile-init";
  msg.data = "connected";
  socket.send(JSON.stringify(msg));
}

function processMessage() {}

function sendWS(msg: Message) {
  socket.send(JSON.stringify(msg));
}

function onDone(err: any, status: any) {
  if (err) {
    // here we can handle errors and clean up any loose ends.
    console.error(err);
  }
  if (status.authorized) {
    QRScanner.show();
    QRScanner.scan(displayContents);
  } else if (status.denied) {
    // The video preview will remain black, and scanning is disabled. We can
    // try to ask the user to change their mind, but we'll have to send them
    // to their device settings with `QRScanner.openSettings()`.
  } else {
    // we didn't get permission, but we didn't get permanently denied. (On
    // Android, a denial isn't permanent unless the user checks the "Don't
    // ask again" box.) We can ask again at the next relevant opportunity.
  }
}

function displayContents(err: any, qrText: any) {
  if (err) {
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
    alert(qrText);
    JSON.parse(qrText);
    QRScanner.scan(displayContents);
  }
}

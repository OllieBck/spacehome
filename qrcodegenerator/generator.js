var QRCode = require("qrcode-svg");

var qrcode = new QRCode({
  content: "{}",
  padding: 4,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M",
});
qrcode.save("sample2.svg", function (error) {
  if (error) throw error;
  console.log("Done!");
});

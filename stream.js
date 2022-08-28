const fs = require("fs");

const readStream = fs.createReadStream('./data.txt');
// console.log(readStream);

readStream.on("data", (chunk) => {
    console.log(".............");
    console.log(chunk);
})

readStream.on("open", () => {
    console.log("Stream on");
})

setTimeout(() => {
    readStream.pause();
    console.log("pause");
}, 15)

setTimeout(() => {
    readStream.resume();
    console.log("Resume");
}, 8000)
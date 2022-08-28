const fs = require("fs");

const readStream = fs.createReadStream("./data.txt");

readStream.on("data", (chunk) => {
    console.log("................");
    console.log(chunk);
})

readStream.on("open", () => {
    console.log("Stream is open");
})

setTimeout(() => {
    readStream.pause();
    console.log("Pause");
}, 15);

setTimeout(() => {
    console.log("Resume");
    readStream.resume();
}, 8000)
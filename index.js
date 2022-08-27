// const _ = require("underscore");
// const http = require('http');

// const server = http.createServer(function (req, res) {

//   console.log(`Server is running`);

// });

// server.listen(5000);

// var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
// const res = _.pluck(stooges, 'name');
// console.log(res);

const sum = require("./others");
const check = sum(2, 5);
console.log(check);

const http = require("http");

const server = http.createServer((req, res) => {
    // res.end("Hello World/Node.js");
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ course: "ACC" }));
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Hello dear sona</h2>");
        res.end();
    }

});

const PORT = 5000;
server.listen(PORT);
console.log(`server is running ${PORT}`);
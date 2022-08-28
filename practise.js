const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Welcome to Full Stack Development</h2>");
        res.end();
    }
    if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ course: "ACC" }));
    }
})

const PORT = 3000;

server.listen(PORT);
console.log(`Server is running ${PORT}`);
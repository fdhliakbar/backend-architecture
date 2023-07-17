const http = require("http");
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  response.statusCode = 203;
  response.end("Response dengan status 203!");
});

server.listen(port, host, function () {
  console.log(`Server menyala di ${host}:${port}`);
});

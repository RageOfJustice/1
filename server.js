const net = require("net");

const server = net.createServer(function(socket) {
  socket.pipe(socket);
});

server.listen(1337, "127.0.0.1");

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("New Connection", socket.id)
});

class Device {
	constructor(socketid) {
		this.id = socketid;
  }

	getDevices(type) {
		this.type = type 

		io.emit()
	}
}

httpServer.listen(3000);
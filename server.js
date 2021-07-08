const express = require("express")
const http = require("http")
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
})

app.use(cors())

io.on("connection", (socket) => {
	socket.emit("me", socket.id)
	console.log(socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		console.log(data)
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on('send-changes', (delta, userId) => {
		// console.log(userId)
		io.to(userId).emit('recieve-changes', delta);
	  });
	
	  socket.on('send-message', (data) => {
		  console.log(data)
		io.to(data.userToSend).emit('recieve-message', data.data);
	  });

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signalData)
	})
})

app.get('/',(req,res)=>{
	res.send('Server is running')
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log("server is running on port 5000"))
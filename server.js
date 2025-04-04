import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "https://chat-sqi.vercel.app"]
    }
})
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST']
}))

server.listen(4009, () => {
  console.log("Listening to port 4009");
});

io.on("connection", (socket)=>{
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} left the chat`);
    })
})
// http://4003/api/v1
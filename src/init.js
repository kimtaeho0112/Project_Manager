import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";
import socketIO from "socket.io";
import socketController from "./socketControllers";

dotenv.config();

import "./models/Goal";
import "./models/Project";
import "./models/Story";
import "./models/User";
import "./models/Message"

const PORT = process.env.PORT;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const server = app.listen(4000, handleListening); 

const io = socketIO.listen(server);

io.on("connection", socket => {
    socketController(socket);
});
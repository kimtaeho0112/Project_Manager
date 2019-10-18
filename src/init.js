import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";

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

app.listen(4000, handleListening);
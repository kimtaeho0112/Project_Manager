import "./db";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import "./models/Project";
import "./models/Goal";
import "./models/Story";
import "./models/User";

const PORT = process.env.PORT;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(4000, handleListening);
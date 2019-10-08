import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import app from "./app";

const handleListening = () => {
    console.log("Listening on: http://localhost:4000");
}

app.listen(4000, handleListening);
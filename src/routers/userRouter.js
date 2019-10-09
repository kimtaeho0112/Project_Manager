import express from "express";
import routes from "./routes";
import { 
    userDetail
    } from "../controllers/userController";

const userRouter = express.Router();


export default userRouter;
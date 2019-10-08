import express from "express";
import routes from "./routes";
import { home } from "../controllers/projectController";
import { 
    myProfile, 
    } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, myProfile);

export default userRouter;
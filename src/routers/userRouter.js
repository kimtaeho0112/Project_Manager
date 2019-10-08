import express from "express";
import routes from "./routes";
import { home } from "../controllers/projectController";
import { 
    editProfile, 
    } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, editProfile);

export default userRouter;
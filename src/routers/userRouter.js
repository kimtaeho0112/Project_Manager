import express from "express";
import routes from "./routes";
import { 
    userDetail, profileAnother
    } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.profileAnother(), profileAnother);

export default userRouter;
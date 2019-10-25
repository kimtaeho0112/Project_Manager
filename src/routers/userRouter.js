import express from "express";
import routes from "./routes";
import { 
    userDetail, profileAnother, acceptReq, rejectReq
    } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.profileAnother(), profileAnother);
userRouter.get(routes.acceptReq(), acceptReq);
userRouter.get(routes.rejectReq(), rejectReq);

export default userRouter;
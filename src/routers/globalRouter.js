import express from "express";
import routes from "./routes";
import passport from "passport";
import { home } from "../controllers/projectController";
import { 
    getJoin, 
    getLogin, 
    postJoin, 
    postLogin, 
    logout, 
    userDetail,
    getCreateProject, 
    postCreateProject,
    market,
    profileAnother,
    acceptReq
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.me, userDetail);
globalRouter.get(routes.project, getCreateProject);
globalRouter.post(routes.project, postCreateProject);
globalRouter.get(routes.market, market);
globalRouter.get(routes.profileAnother(), profileAnother);
globalRouter.get(routes.acceptReq(), acceptReq);

export default globalRouter;
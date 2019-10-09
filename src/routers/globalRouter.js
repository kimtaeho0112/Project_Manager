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
    postCreateProject} from "../controllers/userController";

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


export default globalRouter;
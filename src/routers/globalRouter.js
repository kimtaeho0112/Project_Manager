import express from "express";
import routes from "./routes";
import passport from "passport";
import { home } from "../controllers/projectController";
import { getJoin, getLogin, postJoin, postLogin, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
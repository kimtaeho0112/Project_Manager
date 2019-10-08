import express from "express";
import routes from "./routes";
import { home } from "../controllers/projectController";
import { getJoin, getLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);

export default globalRouter;
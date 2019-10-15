import express from "express";
import routes from "./routes";
import { home, addMyGoal } from "../controllers/projectController";

const goalRouter = express.Router();

goalRouter.get(routes.home, home);
goalRouter.get(routes.addMyGoal(), addMyGoal);

export default goalRouter;
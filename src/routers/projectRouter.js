import express from "express";
import routes from "./routes";
import { home, projectDetail, editGoal, getAddGoal, postAddGoal, getAddMarket, postAddMarket } from "../controllers/projectController";

const projectRouter = express.Router();

projectRouter.get(routes.home, home);
projectRouter.get(routes.projectDetail(), projectDetail);
projectRouter.get(routes.editGoal(), editGoal);
projectRouter.get(routes.addGoal(), getAddGoal);
projectRouter.post(routes.addGoal(), postAddGoal);
projectRouter.get(routes.addMarket(), getAddMarket);
projectRouter.post(routes.addMarket(), postAddMarket);

export default projectRouter;
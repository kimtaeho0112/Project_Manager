import express from "express";
import routes from "./routes";
import { home, projectDetail, editGoal } from "../controllers/projectController";

const projectRouter = express.Router();

projectRouter.get(routes.home, home);
projectRouter.get(routes.projectDetail(), projectDetail);
projectRouter.get(routes.editGoal(), editGoal);

export default projectRouter;
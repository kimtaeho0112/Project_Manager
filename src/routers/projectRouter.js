import express from "express";
import routes from "./routes";
import { home, projectDetail } from "../controllers/projectController";

const projectRouter = express.Router();

projectRouter.get(routes.home, home);
projectRouter.get(routes.projectDetail(), projectDetail);

export default projectRouter;
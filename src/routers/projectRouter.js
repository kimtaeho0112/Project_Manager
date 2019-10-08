import express from "express";
import routes from "./routes";
import { home } from "../controllers/projectController";

const projectRouter = express.Router();

projectRouter.get(routes.home, home);

export default projectRouter;
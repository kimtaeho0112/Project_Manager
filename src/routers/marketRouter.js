import express from "express";
import routes from "./routes";
import { marketDetail, reqParticipateProject } from "../controllers/marketController";

const marketRouter = express.Router();


marketRouter.get(routes.marketDetail(), marketDetail);
marketRouter.get(routes.reqParticipateProject(), reqParticipateProject);

export default marketRouter;
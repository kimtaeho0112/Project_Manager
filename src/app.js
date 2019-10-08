import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import { localsMiddleware } from "./middleware";
import routes from "./routers/routes";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import projectRouter from "./routers/projectRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.project, projectRouter);

export default app;
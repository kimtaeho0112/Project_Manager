import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Project Manager";
    res.locals.routes = routes;
    next();
};
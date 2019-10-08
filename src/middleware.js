import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Project Manager";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};
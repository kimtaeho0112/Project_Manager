const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User
const USERS = "/users";
const USER_DETAIL = "/:id";

// PROJECT
const PROJECT = "/project";
const PROJECT_DETAIL = "/:id/";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    users: USERS,
    userDetail: USER_DETAIL,
    project: PROJECT,
    projectDetail: PROJECT_DETAIL
};

export default routes; 
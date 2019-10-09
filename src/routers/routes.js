const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User
const USERS = "/users";
const USER_DETAIL = "/:id";
const ME = "/me";

// PROJECT
const PROJECT = "/project";
const PROJECT_DETAIL = "/:id";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    users: USERS,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    project: PROJECT,
    projectDetail: (id) => {
        if(id) {
            return `/project/${id}`;
        } else {
            return PROJECT_DETAIL;
        }
    },
    me: ME
};

export default routes; 
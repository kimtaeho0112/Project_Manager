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
const EDIT_GOAL = "/:id/editGoal";
const ADD_GOAL = "/:id/addGoal";

// GOAL
const GOAL = "/goal";
const ADD_MYGOAL = "/:id/addMyGoal";


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
    me: ME,
    editGoal: (id) => {
        if(id) {
            return `/project/${id}/editGoal`;
        } else {
            return EDIT_GOAL;
        }
    },
    addGoal: (id) => {
        if(id) {
            return `/project/${id}/addGoal`;
        } else {
            return ADD_GOAL;
        }
    },
    goal: GOAL,
    addMyGoal: (id) => {
        if(id) {
            return `/goal/${id}/addMyGoal`;
        } else {
            return ADD_MYGOAL;
        }
    }
};

export default routes; 
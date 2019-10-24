const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const MARKET = "/market"

// User
const USERS = "/users";
const USER_DETAIL = "/:id";
const ME = "/me";
const PROFILE_ANOTHER = "/:id" 

// PROJECT
const PROJECT = "/project";
const PROJECT_DETAIL = "/:id";
const MARKET_DETAIL = "/:id";
const REQ_PROJ = "/:id/requestParticipate"
const EDIT_GOAL = "/:id/editGoal";
const ADD_GOAL = "/:id/addGoal";
const ADD_MARKET = "/:id/addMarket";

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
    profileAnother: (id) => {
        if(id) {
            return `/users/${id}`;
        } else {
            return PROFILE_ANOTHER;
        }
    },
    market: MARKET,
    project: PROJECT,
    projectDetail: (id) => {
        if(id) {
            return `/project/${id}`;
        } else {
            return PROJECT_DETAIL;
        }
    },
    marketDetail: (id)=>{
        if(id){
            return `/market/${id}`;
        }else{
            return MARKET_DETAIL;
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
    addMarket: (id) => {
        if(id) {
            return `/project/${id}/addMarket`;
        } else {
            return ADD_MARKET;
        }
    },
    reqParticipateProject: (id)=>{
        if(id){
            return `/market/${id}/requestParticipate`;
        }else{
            return REQ_PROJ
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
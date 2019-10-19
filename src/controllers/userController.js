import express from "express";
import Projects from "../models/Project";
import User from "../models/User";
import routes from "../routers/routes";
import passport from "passport";
import Project from "../models/Project";
import Goal from "../models/Goal";
import Message from "../models/Message"

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "login" });
}

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const userDetail = async (req, res) => {
    try {
        var user = await User.findById(req.user._id).populate("currentProject").populate("finishedProject");
        var userMessages = [];

        for( const x of user.currentProject){
           var message =  await Message.find({})
                                         .where('projectId').equals(x._id)
                                         .select('_id requestedId projectId isAccepted');
                                         
            if( message[0] == null ) continue;
            else{
                var newMessage = {
                    ['isAccepted'] : message[0].isAccepted,
                    ['MessageId'] : message[0]._id,
                    ['requestedId'] : message[0].requestedId,
                    ['projectId'] : message[0].projectId,
                    ['title']: x.title,
                    ['isFinish'] : x.isFinish,
                    ['description'] : x.description,
                    ['userId'] : user.id
                }
                userMessages.push(newMessage)
            }
        }
        userMessages['user'] = user;
        console.log('user', userMessages);
        res.render("userDetail", {pageTitle: "User Detail", userMessages})
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getMe = async (req, res) => {
    try{
        const user = await User.findById(req.id).populate("currentProject").populate("finishedProject");
        res.render("userDetail", { pageTitle: "User Detail", user});
    }catch(error){
        res.redirect(routes.home);
    }
}

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "join" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch(error) {
            console.log(error);
        }
    }
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const getCreateProject = (req, res) => {
    res.render("createProject", {pageTitle: "Project"});
}

export const postCreateProject = async (req, res) => {
    const {
        body: {
            title,
            start,
            due,
            desc,
            goal,
            reqPeople
        }
    } = req;
    try {
        const newProject = await Project.create({
            title: title,
            isFinish: false,
            description: desc,
            createdAt: start,
            dueDate: due,
            requiredPeople : reqPeople
        });

        const newGoal = await Goal.create({
            description: goal
        });

        User.findByIdAndUpdate(req.user._id,
            {
                $push: { "currentProject": newProject._id }
            },
            {
                safe: true, upsert: true, new: true
            });
        // console.log(newProject._id);
        // console.log(newGoal._id);

        req.user.currentProject.push(newProject._id);
        req.user.save();
        newProject.goal.push(newGoal._id);
        newProject.save();
        res.redirect(routes.home);
    } catch(error) {
        console.log("error");
    }
}
/*
*   @param      req.params[page] -> page 개수 만큼 project return,
                -1 또는 0 일 경우 모두 return
*/
export const getUnfinishedProjects = async(req, res) => {
    const pro = await Project.find()
                 .where('isFinished').equals(false)
                 .sort('dueDate')
                 .limit(req.param('pages'))
                 .select('title description')
    res.render("projectsDetail", { pageTitle: "markets", pro})
}



export const market = async (req, res) => {
// <<<<<<< HEAD
//     var projects = null
//     try {
//         projects = Project.find()
//                           .where('isFinished').equals(false)
//                           .sort('dueDate')
//                           .select('title description')
//         console.log(projects)
//         res.render("market", {pageTitle: "Market", projects})
//     } catch (error) {
//         console.log(error)
//     }
//     res.render("market", { pageTitle: "Market",  projects });
// =======
    const allPro = await Project.find()
                                .where('isFinish').equals(false)
                                .select('_id isFinish goal requirePeople title createdAt dueDate onMarket')
    console.log(allPro)
    res.render("market", { pageTitle: "Market", allPro });
}

export const profileAnother = (req, res) => {
    console.log(req.user)
    const profile = req.user
    res.render("profileAnother", {pageTitle: "Another Person Prfile", profile});
}
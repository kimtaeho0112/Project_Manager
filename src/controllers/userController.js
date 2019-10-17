import express from "express";
import Projects from "../models/Project";
import User from "../models/User";
import routes from "../routers/routes";
import passport from "passport";
import Project from "../models/Project";
import Goal from "../models/Goal";

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "login" });
}

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const userDetail = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("currentProject").populate("finishedProject");
        console.log(user);
        res.render("userDetail", {pageTitle: "User Detail", user})
    } catch (error) {
        console.log("error");
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
            goal
        }
    } = req;
    try {
        const newProject = await Project.create({
            title: title,
            isFinish: false,
            description: desc,
            createdAt: start,
            dueDate: due
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

export const market = async (req, res) => {
    const allPro = await Project.find({});
    res.render("market", { pageTitle: "Market", allPro });
}
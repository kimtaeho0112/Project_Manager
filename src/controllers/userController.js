import express from "express";
import Projects from "../models/Project";
import User from "../models/User";
import routes from "../routers/routes";
import passport from "passport";

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "login" });
}

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
})

export const myProfile = async (req, res) => {
    const projects = await Projects.find({}).sort( { _id: -1 });
    res.render("myProfile", { pageTitle: "profile", projects: projects });
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
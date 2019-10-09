import express from "express";

export const home = (req, res) => {
    res.render("home", { pageTitle: "home" });
}

export const projectDetail = (req, res) => {
    res.render("projectDetail", { pageTitle: "Project Deatil"});
}
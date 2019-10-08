import express from "express";

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "login" });
}

export const postLogin = (req, res) => {

}

export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "profile" });
}

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {

}
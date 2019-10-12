import User from "../models/User";
import Project from "../models/Project";
import Goal from "../models/Goal";
import { objectTypeIndexer } from "babel-types";

export const home = (req, res) => {
    res.render("home", { pageTitle: "home" });
}

export const projectDetail = async (req, res) => {
    const {
        params: { id }
      } = req;
      console.log(id);
      const pro = await Project.findById(id).populate("goal");
      res.render("projectDetail", { pageTitle: "Project Deatil", pro });
}
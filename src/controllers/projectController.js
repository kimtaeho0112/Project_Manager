import routes from "../routers/routes";
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
      // console.log(id);
      const pro = await Project.findById(id).populate("goal").populate("charge").populate("chargername");
      // console.log(pro.goal);
      res.render("projectDetail", { pageTitle: "Project Deatil", pro });
}

export const editGoal = async (req, res) => {
    const {
        params: { id }
      } = req;
      // console.log(id);
      const pro = await Project.findById(id).populate("goal");
      // console.log(pro.goal[0]._id);
      const goal = await Goal.findById(pro.goal[0]._id);
      // console.log(pro);
    res.render("editGoal", {pageTitle: "edit Goal", pro });
}

export const addMyGoal = async (req, res) => {
    const {
        params : { id }
    } = req;
    const goal = await Goal.findById(id);
    // console.log(goal.charge);
    // console.log(req.user._id);
    try {
    await Goal.findByIdAndUpdate(id,
        {
            $push: { "charge": req.user._id }
        },
        {
            safe: true, upsert: true, new: true
        });
    const user = await User.findById(req.user._id);
    // console.log(user.name);
    await Goal.findByIdAndUpdate(id,
        {
            $push: { "chargername": user.name }
        },
        {
            safe: true, upsert: true, new: true
        });
    goal.charge.push(req.user_.id);
    goal.chargername.push(user.name);
    goal.save();
    goal.save();
    res.redirect(routes.home);
    } catch(error){
        console.log("error");
    }
}
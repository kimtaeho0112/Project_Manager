import User from "../models/User";
import Project from "../models/Project";
import Goal from "../models/Goal";
import Story from "../models/Story";

export const home = (req, res) => {
    res.render("home", { pageTitle: "home" });
}

export const projectDetail = (req, res) => {
    const {
        params: { id }
      } = req;
      // console.log(id);
      const goal = Goal.findOne( { inProject: id });
      const mygoal = goal.findOne( { charge: req.user._id });
    res.render("projectDetail", { pageTitle: "Project Deatil", goal, mygoal });
}
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
      const pro = await Project.findById(id).populate("goal").populate("charge").populate("chargername").populate("member");
      // console.log(pro.goal);
      const reqid = req.user._id;
      const user = await User.findById(reqid).populate("goal");
      console.log("##################");
      console.log(pro.member);
      res.render("projectDetail", { pageTitle: "Project Deatil", pro, user });
}

export const editGoal = async (req, res) => {
    const {
        params: { id }
      } = req;
      // console.log(id);
      const pro = await Project.findById(id).populate("goal");
      // console.log(pro.goal[0]._id);
      // const goal = await Goal.findById(pro.goal[0]._id);
      // console.log(pro);
    res.render("editGoal", {pageTitle: "edit Goal", pro });
}



export const addMyGoal = async (req, res) => {
    const {
        params : { id }
    } = req;
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
    // console.log("No error at chargername updating");
    await Goal.findByIdAndUpdate(id,
        {
            $set: { "isCharged": true }
        },
        {
            safe: true, upsert: true, new: true
        });
    // console.log("No error at isCharged updating");
    const goal = await Goal.findById(id);
    goal.update(
        { $push : {charge: req.user._id}}
    );
    // console.log("No error at push using update")
    goal.update(
        { $push: {chargername: user.name}}
    );
    // goal.isCharged = true;
    await User.findByIdAndUpdate(req.user._id,
        {
            $push: { "goal": goal.id }
        },
        {
            safe: true, upsert: true, new: true
        });
    req.user.update(
        { $push: {goal: goal.id}}
    );
    goal.save();
    console.log("No error at save 1");
    goal.save();
    console.log("No error at save 2");
    goal.save();
    console.log("No error at save 3");
    req.user.save();
    res.redirect(routes.home);
    } catch(error){
        console.log("error");
    }
}

export const getAddGoal = async (req, res) => {
    const {
        params: { id }
    } = req;
    const pro = await Project.findById(id);
    // console.log(pro._id);
    res.render("addGoal", { pageTitle: "Add Goal", pro });
}

export const postAddGoal = async (req, res) => {
    const {
        params: { id }
    } = req;
    const {
        body: {
            goalName, start, due
        }
    } = req;

    try {
        const newGoal = await Goal.create({
            description: goalName,
            start: start,
            dueDate: due
        });
        const pro = await Project.findById(id);
        await Project.findByIdAndUpdate(id,
            {
                $push: { "goal": newGoal._id }
            },
            {
                safe: true, upsert: true, new: true
            });
        pro.save();
        
            res.redirect(routes.projectDetail(id));
    } catch(error){
        console.log("error");
    }
}

export const getAddMarket = async (req, res) => {
    const {
        params : {id}
    } = req;

    const pro = await Project.findById(id);
    await Project.findByIdAndUpdate(id,
        {
            $set: { "onMarket": true }
        },
        {
            safe: true, upsert: true, new: true
        });
    res.render("addMarket", {pageTitle:"Add Market", pro});
    pro.save();
}

export const postAddMarket = async (req, res) => {
    const {
        body: {due}
    } = req;

    const {
        params: {id}
    } = req;

    const pro = await Project.findById(id);
    await Project.findByIdAndUpdate(id,
        {
            $set: { "onMarketDue": due }
        },
        {
            safe: true, upsert: true, new: true
        });
    pro.save();
    res.redirect(routes.projectDetail(id));
}
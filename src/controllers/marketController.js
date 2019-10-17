import routes from "../routers/routes";
import User from "../models/User";
import Project from "../models/Project";
import Goal from "../models/Goal";
import { objectTypeIndexer } from "babel-types";

export const marketDetail = async (req, res) => {
    const {
        params: { id }
      } = req;
      // console.log(id);
      const pro = await Project.findById(id).populate("goal").populate("charge").populate("chargername");
      // console.log(pro.goal);
      res.render("marketDetail", { pageTitle: "Market Detail", pro });
}

export const reqParticipateProject = async (req,res) =>{
    const {
        params: {id}
    } = req;
    const pro = await Project.findById(id);
    console.log( pro)
    res.render("reqParticipateProject", { pageTitle: "Market Detail", pro });
}
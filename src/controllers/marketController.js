import routes from "../routers/routes";
import User from "../models/User";
import Project from "../models/Project";
import Message from "../models/Message";
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
    var message = null;
    const {
        params: {id} 
    } = req;
    const pro = await Project.findById(id);
    if( pro.requiredPeople >= 1 && req.user.currentProject[id] == null ) {
        message = await Message.create({
            requestedId: req.user._id,
            projectId: id,
            isAccepted: false
        });
        // console.log(message.requestedId);
        res.render('reqParticipateProject', {pageTitle:"Success", message});
    }
    else if(req.user.currentProject[id] != null) {
        res.render('reqParticipateProject', {pageTitle: "your project", message});
    }
    else if(Message.find().where('requestId').equals(req.user._id) != null){
        res.render('reqParticipateProject', {pageTitle:"Already participated!", message});
    }
    else {
        res.render("reqParticipateProject", { pageTitle: "Unexpected Error", message });
    }
} 
import routes from "../routers/routes";
import User from "../models/User";
import Project from "../models/Project";
import Message from "../models/Message";
import Goal from "../models/Goal";
import { objectTypeIndexer } from "babel-types";

export const marketDetail = async (req, res) => {
    try {
    const {
        params: { id }
      } = req;

      // console.log(id);
      const pro = await Project.findById(id);
      // console.log(pro.goal);
      console.log(pro.owner);
      const now = new Date().getDate;
      const leftDate = pro.onMarketDue - pro.onMarketStart;
      const ownerName = await User.findById(pro.owner);
      // console.log("LEFT DATE", leftDate);
      res.render("marketDetail", { pageTitle: "Market Detail", pro, leftDate, ownerName });
    } catch(error){
        console.log("eror");
    }
}

export const reqParticipateProject = async (req,res) =>{
    var message = null;
    const {
        params: {id} 
    } = req;
    const user = await User.findById(req.user._id);
    // console.log(user.name);
    const pro = await Project.findById(id);
    if( pro.requiredPeople >= 1 && req.user.currentProject[id] == null ) {
        message = await Message.create({
            requestedId: req.user._id,
            name: user.name,
            projectId: id,
            projectOwnerId: pro.owner,
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
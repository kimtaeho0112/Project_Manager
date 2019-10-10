import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    description: String,
    charge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    inProject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
});

const model = mongoose.model("Goal", GoalSchema);

export default model;
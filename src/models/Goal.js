import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    charge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description: String,
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
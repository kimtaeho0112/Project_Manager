import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    description: String,
    charge: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    ]
});

const model = mongoose.model("Goal", GoalSchema);

export default model;
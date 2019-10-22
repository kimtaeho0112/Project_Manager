import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type:Date
    },
    isCharged: {
        type: Boolean,
        default: false
    },
    charge: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    ],
    chargername: [
        {
            type: mongoose.Schema.Types.String,
            ref: "User"
        }
    ]
});

const model = mongoose.model("Goal", GoalSchema);

export default model;
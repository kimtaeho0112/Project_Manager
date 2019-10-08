import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    isFinish: {
        type: Boolean,
        default: false
    },
    descripttion: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    member: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const model = mongoose.model("Projects", ProjectSchema);

export default model;
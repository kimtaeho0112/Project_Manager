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
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type:Date
    }
});

const model = mongoose.model("Project", ProjectSchema);

export default model;
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    member: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
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
    },
    goal: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal"
        }
    ],
    onMarket:{
        type: Boolean,
        default: false
    },
    requiredPeople:{
        type: Number,
        default: 1
    },
    onMarketStart:{
        type: Date,
        default: Date.now
    },
    onMarketDue: {
        type: Date
    }
});

const model = mongoose.model("Project", ProjectSchema);

export default model;
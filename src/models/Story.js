import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
    fileUrl : String,
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

const model = mongoose.model("Story", StorySchema);

export default model;
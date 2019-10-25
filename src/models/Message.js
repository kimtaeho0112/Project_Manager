import mongoose from "mongoose";

const MessageScheme = new mongoose.Schema({
    requestedId: String,
    projectId: String,
    projectOwnerId : String,
    name : String,
    isAccepted: {
        type: Boolean,
        default: false
    },
});

const model = mongoose.model("Message", MessageScheme);

export default model;
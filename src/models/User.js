import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    currentProject: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
        }
    ],
    finishedProject: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
        }
    ],
    goal: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Goal"
        }
    ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email'});

const model = mongoose.model("User", UserSchema);

export default model;
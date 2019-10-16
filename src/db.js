import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, (err,db) => { 
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
    if( err ){
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

const db = mongoose.connection;

const handleOpen = () => {
    console.log("Connect to DB");
}

const handleError = () => {
    console.log("Error on DB connection");
}

db.once("open", handleOpen);
db.on("error", handleError);
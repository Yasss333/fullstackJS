import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db=()=>{
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Connected to Mongo");
      })
      .catch(() => {
        console.log("Disconnectd to Mongo");
      });
}

export default db;

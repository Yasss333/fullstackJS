import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String ,
    role:{
        type:String , 
        enum:["user","admin"],
        default:"user",
    },
    isVerfied:{
        type:Boolean,
        default:false,
    },
    verficationToken:{
        type:String,
    },
    resetpasswordToken:{
        type:String,
    },
    resetpasswordExpiry:{
        type:Date,
    },

},{
    timestamps:true,
});


const User=mongoose.model("User",username);

export default user;
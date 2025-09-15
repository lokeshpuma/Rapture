import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        default:""  
    },
    profilePicture:{
        type:String,
        default:"",
    },
    bannerImage:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:"",
        maxLength:160
    },
    location:{
        type:String,
        default:"",
        maxLength:30
    },
    followers:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        },
    ],
    following:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        },
    ],

},
{
    timestamps:true
});

export const User = mongoose.model("User",userSchema);
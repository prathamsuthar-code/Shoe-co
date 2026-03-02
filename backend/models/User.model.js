import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    userName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

export const User = mongoose.model("user" , userSchema)
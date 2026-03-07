import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }
})

export const Login = mongoose.model("login" , loginSchema)
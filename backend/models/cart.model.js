import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },


    
   
})

export const Cart = mongoose.model("user" , cartSchema)
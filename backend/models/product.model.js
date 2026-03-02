import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    brandName : {
        type : String
    },
    mrp : {
        type : String
    },
    sellingPrice : {
        type : String
    },
    images : {
        type : [{
            path : String
        }]
    },

} , {timestamps : true})

export const Product = mongoose.model("product" , productSchema)
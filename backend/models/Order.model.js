import mongoose from "mongoose";

const orderSchema = new Schema({
    id : {
        type : String
    },
    products : {
        type : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "product"
        }]
    },
    Total : {
        type : String
    },
    images : {
        type : [{
            path : String
        }]
    },

} , {timestamps : true})

export const Order = mongoose.model("order" , orderSchema)
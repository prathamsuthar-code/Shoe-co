import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({

  userId: String,

  items: [
    {
      productId: String,
      productName: String,
      price: Number,
      img: String,
      quantity: Number
    }
  ],

  shipping: {
    name: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },

  totalPrice: Number,

  status: {
    type: String,
    default: "Pending"
  }

}, { timestamps: true })

export default mongoose.model("Order", orderSchema)
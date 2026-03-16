import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  productName: String,
  price: Number,
  img: String,
  quantity: {
    type: Number,
    default: 1
  }
})

export default mongoose.model("Cart", cartSchema)
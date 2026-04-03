import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  productName: String,
  price: Number,
  size: String,
  img: String,
  quantity: Number
})


cartSchema.index(
  { userId: 1, productId: 1 },
  { unique: true }
)


export default mongoose.model("Cart", cartSchema)
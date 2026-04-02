import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  productName: String,
  price: Number,
  img: String,
  quantity: Number
})


cartSchema.index(
  { userId: 1, productId: 1, size: 1 },
  { unique: true }
)


export default mongoose.model("Cart", cartSchema)
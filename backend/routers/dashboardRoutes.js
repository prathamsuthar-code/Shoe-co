import express from "express"
import Order from "../models/Order.model.js"
import {Product} from "../models/product.model.js"
import {User} from "../models/User.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {

    // TOTAL ORDERS
    const totalOrders = await Order.countDocuments()

    // TOTAL USERS
    const totalUsers = await User.countDocuments()

    // TOTAL PRODUCTS
    const totalProducts = await Product.countDocuments()

    // TOTAL REVENUE
    const orders = await Order.find()

const totalRevenue = orders.reduce(
  (sum, order) => sum + Number(order.totalPrice || 0),
  0
)

    res.json({
      totalOrders,
      totalUsers,
      totalProducts,
      totalRevenue
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
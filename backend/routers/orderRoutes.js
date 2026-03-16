import express from "express"
import Order from "../models/Order.model.js"

const router = express.Router()

/*
=====================================
CREATE ORDER
POST /api/order/create
=====================================
*/
router.post("/create", async (req, res) => {

  try {

    const { userId, items, shipping, totalPrice } = req.body

    const order = new Order({
      userId,
      items,
      shipping,
      totalPrice,
      status: "Pending"
    })

    await order.save()

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

/*
=====================================
GET USER ORDERS
GET /api/order/:userId
=====================================
*/
router.get("/:userId", async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 })

    res.status(200).json(orders)

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

/*
=====================================
GET ALL ORDERS (ADMIN)
GET /api/order
=====================================
*/
router.get("/", async (req, res) => {

  try {

    const orders = await Order.find().sort({ createdAt: -1 })

    res.status(200).json(orders)

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

/*
=====================================
GET SINGLE ORDER
GET /api/order/details/:id
=====================================
*/
router.get("/details/:id", async (req, res) => {

  try {

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      })
    }

    res.status(200).json(order)

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

/*
=====================================
UPDATE ORDER STATUS (ADMIN)
PUT /api/order/status/:id
=====================================
*/
router.put("/status/:id", async (req, res) => {

  try {

    const { status } = req.body

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

export default router
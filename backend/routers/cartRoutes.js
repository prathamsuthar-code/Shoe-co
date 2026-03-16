import express from "express"
import Cart from "../models/cart.model.js"

const router = express.Router()

// ADD TO CART
router.post("/add", async (req, res) => {
  let { userId, productId, productName, price, img} = req.body

  price = Number(price)

  console.log("price", price)

  try {
    const existingItem = await Cart.findOne({ userId, productId })

    if (existingItem) {
      existingItem.quantity += 1
      await existingItem.save()
      return res.json(existingItem)
    }

    const newItem = new Cart({
      userId,
      productId,
      price ,
      productName,
      img
    })

    await newItem.save()

    res.json(newItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// REMOVE ITEM FROM CART
router.delete("/remove/:id", async (req, res) => {
  try {

    const deletedItem = await Cart.findByIdAndDelete(req.params.id)

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found"
      })
    }

    res.status(200).json({
      success: true,
      message: "Item removed from cart"
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    })

  }
})

// GET CART BY USER
router.get("/:userId", async (req, res) => {
  try {

    const cartItems = await Cart.find({ userId: req.params.userId })

    res.status(200).json(cartItems)

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    })

  }
})

// CLEAR USER CART
router.delete("/clear/:userId", async (req, res) => {

  try {

    await Cart.deleteMany({ userId: req.params.userId })

    res.status(200).json({
      success: true,
      message: "Cart cleared"
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    })

  }

})

export default router

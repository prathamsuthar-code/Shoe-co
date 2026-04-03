import express from "express"
import Cart from "../models/cart.model.js"

const router = express.Router()

// ADD TO CART
router.post("/add", async (req, res) => {
 
  let { userId, productId, productName, price, img, size, quantity  } = req.body

  try {
    const updatedItem = await Cart.findOneAndUpdate(
      {
        userId,
        productId: String(productId),
        size
      },
      {
        $inc: { quantity: Number(quantity) || 1 },
        $setOnInsert: {
          productName,
          price: Number(price),
          img,
          size
        }
      },
      { new: true, upsert: true }
    )

    res.json(updatedItem)
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

// UPDATE QUANTITY
router.patch("/update/:id", async (req, res) => {
  const { action } = req.body // "inc" or "dec"

  try {
    const item = await Cart.findById(req.params.id)

    if (!item) {
      return res.status(404).json({ message: "Item not found" })
    }

    if (action === "inc") {
      item.quantity += 1
    } else if (action === "dec") {
      item.quantity -= 1
    }

    // 🧠 auto delete if qty 0
    if (item.quantity <= 0) {
      await Cart.findByIdAndDelete(req.params.id)
      return res.json({ deleted: true })
    }

    await item.save()
    res.json(item)

  } catch (error) {
    res.status(500).json({ error: error.message })
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

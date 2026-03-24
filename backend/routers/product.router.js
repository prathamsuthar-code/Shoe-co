import express from "express"
import {Product} from "../models/product.model.js"
import { upload } from "../utils/multer.js"
import fileUpload from "express-fileupload"
import { createProduct, updateProduct } from "../controllers/ProductController.js"

const router = express.Router()

// ADD PRODUCT WITH IMAGE
router.post("/add", fileUpload() , createProduct)

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


//this is for Edit Product
router.get("/:id", async (req, res) => {
  try {

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.put("/:id", fileUpload() , updateProduct)

//this is for delete product/
router.delete("/:id", async (req, res) => {
  try {

    const deleted = await Product.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json({ message: "Product deleted successfully" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
import express from "express"
import { User } from "../models/User.model.js"

const router = express.Router()

// GET ALL USERS (ADMIN)
router.get("/", async (req, res) => {

  try {

    const users = await User.find().sort({ createdAt: -1 })

    res.json(users)

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

})

export default router
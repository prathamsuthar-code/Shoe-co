import express from "express"
import Contact from "../models/contact.model.js"

const router = express.Router()

// CREATE MESSAGE
router.post("/create", async (req, res) => {

  try {

    const { name, email, message } = req.body

    const newMessage = new Contact({
      name,
      email,
      message
    })

    await newMessage.save()

    res.json({
      success: true,
      message: "Message received"
    })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

})


// GET ALL MESSAGES (ADMIN)
router.get("/", async (req, res) => {

  const messages = await Contact.find().sort({ createdAt: -1 })

  res.json(messages)

})

export default router
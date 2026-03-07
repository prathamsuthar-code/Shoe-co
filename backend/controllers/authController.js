import {User} from "../models/User.model.js"
import bcrypt from "bcrypt"
import { getToken } from "../utils/helper.js"

export const signup = async (req, res) => {

  try {

    const { firstName, lastName, username, email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword
    })

    // get and return the token to end user
    const token = getToken({email , username ,id : user._id})

    res.status(201).json({
      message: "User created successfully",
      user,
      token,
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Email doesn't exist"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      })
    }

     const token = getToken({
      id: user._id,
      email: user.email,
      username: user.username
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
      }
    });



  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
import express from "express"
import { signup, login } from "../controllers/authController.js"
import { validate } from "../middleware/validate.js"
import { registerValidations, loginValidations } from "../validations/user.validation.js"

const router = express.Router()

router.post("/signup", validate(registerValidations), signup)

router.post("/login", validate(loginValidations), login)

export default router
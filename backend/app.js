import express from "express"
import cors from "cors"
import authRoutes from "./routers/authRoutes.js"
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)

export default app
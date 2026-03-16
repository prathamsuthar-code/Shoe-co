import app from "./app.js"
import dotenv from "dotenv";
import {connectToDB} from "./utils/db.js"
import cartRoutes from "./routers/cartRoutes.js"

dotenv.config();

const PORT = 8000

connectToDB()

app.use("/api/cart", cartRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
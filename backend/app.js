import express from "express";
import cors from "cors";
import authRoutes from "./routers/authRoutes.js";
import productRouter from "./routers/product.router.js";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(`/uploads`, express.static(path.join(process.cwd(), "public")));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRouter);

export default app;

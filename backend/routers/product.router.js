import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/ProductController";

const router = express.Router();

// actual router instance which interacts with the request and response cycle

router.get(`/get`, getProducts);
router.post(`/add`, createProduct);
router.post(`/edit/:id`, updateProduct);

export default router;

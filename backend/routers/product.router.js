import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/ProductController";
import fileUpload from "express-fileupload";

const router = express.Router();

// actual router instance which interacts with the request and response cycle

router.get(`/get`, getProducts);
router.post(`/add`, fileUpload(), createProduct);
router.post(`/edit/:id`, fileUpload(), updateProduct);

export default router;

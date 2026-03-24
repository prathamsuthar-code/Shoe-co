import { Product } from "../models/product.model.js";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";

console.log("asdad", path.join(process.cwd(), "public", "uploads", "products"));
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, brandName, sellingPrice, isNewArrival } =
      req.body;

    if (!name  || !sellingPrice) {
      return res.status(400).json({
        success: false,
        message: "Name and sellingPrice are required",
      });
    }

    let imagePaths = [];

    if (req.files && req.files.image) {
      let images = req.files.image;

      // convert to array if single image
      if (!Array.isArray(images)) {
        images = [images];
      }

      // limit images (optional but recommended)
      if (images.length > 5) {
        return res.status(400).json({
          success: false,
          message: "Maximum 5 images allowed",
        });
      }

      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg+xml",
      ];

      for (const image of images) {
        // size validation (3MB)
        if (image.size > 3 * 1024 * 1024) {
          return res.status(400).json({
            success: false,
            message: `${image.name} exceeds 3MB size limit`,
          });
        }

        // type validation
        if (!allowedTypes.includes(image.mimetype)) {
          return res.status(400).json({
            success: false,
            message: "Only PNG, JPEG, JPG, SVG images are allowed",
          });
        }

        // create unique filename
        const fileName = Date.now() + "-" + image.name.replace(/\s+/g, "");

        const uploadPath = path.join(
          process.cwd(),
          "public",
          "uploads",
          "products",
          fileName,
        );

        const folderName = path.join(
          process.cwd(),
          "public",
          "uploads",
          "products",
        );

        if (!fs.existsSync(folderName)) {
          fs.mkdirSync(folderName, { recursive: true });
        }

        // move file
        await image.mv(uploadPath);

        imagePaths.push({
          path: `/uploads/products/${fileName}`,
        });
      }
    }

    const product = await Product.create({
      name,
      isNewArrival,
      description,
      brandName,
      // mrp,
      sellingPrice,
      images: imagePaths,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create product",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product id",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const { name, description, brandName, sellingPrice, isNewArrival } =
      req.body;

    let imagePaths = product.images;

    if (req.files && req.files.images) {
      let images = req.files.images;

      if (!Array.isArray(images)) {
        images = [images];
      }

      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg+xml",
      ];

      const newImagePaths = [];

      for (const image of images) {
        // size validation
        if (image.size > 3 * 1024 * 1024) {
          return res.status(400).json({
            success: false,
            message: `${image.name} exceeds 3MB limit`,
          });
        }

        // type validation
        if (!allowedTypes.includes(image.mimetype)) {
          return res.status(400).json({
            success: false,
            message: "Only PNG, JPEG, JPG and SVG allowed",
          });
        }

        const fileName = Date.now() + "-" + image.name.replace(/\s+/g, "");

        const uploadPath = path.join(
          process.cwd(),
          "public",
          "uploads",
          "product",
          fileName,
        );

        await image.mv(uploadPath);

        newImagePaths.push({
          path: `/uploads/products/${fileName}`,
        });
      }

      // delete old images from disk
      for (const img of product.images) {
        const oldPath = path.join(process.cwd(), "public", img.path);

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      imagePaths = newImagePaths;
    }

  
    product.name = name;
    product.description = description ;
    product.brandName = brandName ;
    // product.mrp = mrp ?? product.mrp;
    product.sellingPrice = sellingPrice;
    product.images = imagePaths;
    product.isNewArrival = isNewArrival;

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Update Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};

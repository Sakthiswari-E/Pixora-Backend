const express = require("express");

const {
  getProducts,
  createProduct,
  getProductsByCategory,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get( "/category/:category", getProductsByCategory);

router.get("/:id", getProductById);

module.exports = router;
// const express = require("express");

// const {
//   getProducts,
//   createProduct,
// } = require("../controllers/productController");

// const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createProduct);

// module.exports = router;





const express = require("express");

const {
  getProducts,
  createProduct,
  getProductsByCategory,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get(
  "/category/:category",
  getProductsByCategory
);

module.exports = router;
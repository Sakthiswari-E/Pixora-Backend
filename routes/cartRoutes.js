const express = require("express");

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.delete("/:id", protect, removeFromCart);

module.exports = router;
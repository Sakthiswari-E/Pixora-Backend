const express = require("express");

const {
  createOrder,
  getMyOrders,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Order
router.post("/", protect, createOrder);

// Get Logged In User Orders
router.get("/", protect, getMyOrders);

module.exports = router;
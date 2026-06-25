const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    const cart = await Cart.create({
      user: req.user._id,
      product,
      quantity,
    });

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user._id,
    })
      .populate("user")
      .populate("product");

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;

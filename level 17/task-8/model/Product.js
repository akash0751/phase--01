const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, text: true },
  price: Number,
  category: String,
  stock: Number,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

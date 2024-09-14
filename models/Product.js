const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String , required: true },
  stock: { type: Number, default: 10 },
});

module.exports = mongoose.model('Product', ProductSchema);

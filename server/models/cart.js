const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
});

const cart = mongoose.model('Cart', CartSchema);

module.exports = cart;

const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Create a new item
router.post('/add', async (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newItem = await Cart.create({ name, price, img });
    return res.status(200).json(newItem);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
  // console.log(req.body);
});

// Get all cart items
router.get('/items', async (req, res) => {
  try {
    const shoes = await Cart.find();
    return res.json(shoes);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

// Delete a cart item
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.json({ msg: 'Item deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

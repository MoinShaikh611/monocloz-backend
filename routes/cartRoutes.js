const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add item to cart
router.post('/cart', cartController.addItemToCart);

module.exports = router;

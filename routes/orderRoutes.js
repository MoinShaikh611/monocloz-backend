const { createOrder, getAllOrders } = require("../controllers/orderController");
const express = require('express');

const router = express.Router();

// GET /api/products
router.post('/', createOrder);
router.get('/', getAllOrders);

module.exports = router

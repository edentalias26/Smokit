const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/order',authMiddleware, createOrder);
router.get('/orders',authMiddleware, getOrders);

module.exports = router;

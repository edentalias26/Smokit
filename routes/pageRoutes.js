const express = require('express');
const { getHomePage, getProductPage, getCartPage } = require('../controllers/pageController');

const router = express.Router();

router.get('/', getHomePage);
router.get('/product/:id', getProductPage);
router.get('/cart', getCartPage);

module.exports = router;

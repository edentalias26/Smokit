const express = require('express');
const { getHomePage, getProductPage, getAboutPage, getShopPage, getProductByCategory } = require('../controllers/pageController');


const router = express.Router();


router.get('/shop', getShopPage );
router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get('/product/:category/:id', getProductPage);
router.get('/category/:category', getProductByCategory);
module.exports = router;

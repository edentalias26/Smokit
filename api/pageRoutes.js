const express = require('express');
const { getHomePage, getProductPage, getAboutPage, getShopPage } = require('../controllers/pageController');


const router = express.Router();


router.get('/shop', getShopPage );
router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get('/product/:id', getProductPage);

module.exports = router;

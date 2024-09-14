const express = require('express');
const multer = require('../middleware/multer');
const {
  getDashboardPage,
  getAddProductPage,
  getEditProductPage,
  getOrdersPage
} = require('../controllers/dashboardController');

const {
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const { 
  createPageText, 
  getPageText,
  updatePageText,
  deletePageText,
  getTextEditPage,
} = require('../controllers/pageTextController');


const router = express.Router();

router.get('/dashboard', getDashboardPage);
router.get('/dashboard/add-product', getAddProductPage);
router.post('/dashboard/add-product', multer.single('image'), createProduct);
router.get('/dashboard/edit-product/:id', getEditProductPage);
router.post('/dashboard/edit-product/:id', multer.single('image'), updateProduct);
router.post('/dashboard/delete-product/:id', deleteProduct);
router.get('/dashboard/orders',getOrdersPage);

router.get('/dashboard/home' , getTextEditPage)
router.post('/dashboard/home/:id', updatePageText);
router.get('/dashboard/home/:id' , getPageText);

module.exports = router;

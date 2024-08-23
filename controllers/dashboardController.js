const Product = require('../models/Product');

exports.getDashboardPage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('dashboard', { products });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getAddProductPage = (req, res) => {
  try{
    res.render('addProduct');
  } catch (err){
    res.status(500).send('server error')
  }
};


exports.getEditProductPage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('editProduct', { product });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};


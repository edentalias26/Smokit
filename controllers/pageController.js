const Product = require('../models/Product');
const PageText = require('../models/Page');

exports.getHomePage = async (req, res) => {
  try {
    const products = await Product.find();
    const pageText = await PageText.find();
    res.render('index', { products, pageText });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getShopPage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('shop', { products });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getAboutPage = async (req, res) => {
  try {
    const pageText = await PageText.find();
    res.render("about", { pageText });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getProductPage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.render('product', { product });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

const Product = require('../models/Product');
const PageText = require('../models/Page');
const AboutText = require('../models/About');

exports.getHomePage = async (req, res) => {
  try {
    // Find all distinct categories from the Product collection
    const categories = await Product.distinct('category');
    const pageText = await PageText.find();

    // Fetch products for each category and group them
    const productsGroupedByCategory = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ category });
        return { category, products };
      })
    );

    res.render('index', { productsGroupedByCategory, pageText });
  } catch (err) {
    res.status(500).send({ error: err.message });
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
    const aboutText = await AboutText.find();
    res.render("about", { aboutText });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getProductPage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const products = await Product.find({category: req.params.category});
    if (!product) return res.status(404).send('Product not found');
    res.render('product', { product, products });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
exports.getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({category: req.params.category});
    if (!products) return res.status(404).send('Product not found');
    res.render('category', { products });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

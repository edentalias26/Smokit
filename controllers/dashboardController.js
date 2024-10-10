const Order = require("../models/Order");
const Product = require("../models/Product");

exports.getDashboardPage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("dashboard", { products });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getAddProductPage = (req, res) => {
  try {
    res.render("addProduct");
  } catch (err) {
    res.status(500).send("server error");
  }
};

exports.getEditProductPage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("editProduct", { product });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getOrdersPage = async (req, res) => {
  const status = req.body.status;

  if (!status) {
    let orders = await Order.find({status: "Pending"})
    .populate("products.product")
    .sort({ createdAt: -1 });
    res.render("ordersDashboard", { orders });
    console.log(orders)
  } else{
    let orders = await Order.find({status: status})
    .populate("products.product")
    .sort({ createdAt: -1 });
    res.render("ordersDashboard", { orders });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const status = req.body.status;
  const orderId = req.body.orderId;
  let order = await Order.findById({_id: orderId});
  order.status = status;
  await order.save();
  res.redirect("/dashboard/orders");
}

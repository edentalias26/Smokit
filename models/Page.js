const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  title: { type: String},
  content: { type: String}
});

module.exports = mongoose.model('PageText', PageSchema);

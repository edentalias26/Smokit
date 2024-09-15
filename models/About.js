const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  content: { type: String}
});

module.exports = mongoose.model('AboutText', AboutSchema);

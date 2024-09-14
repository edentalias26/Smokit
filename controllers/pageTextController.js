const PageText = require('../models/Page');



  exports.getTextEditPage = async (req, res) => {
    try {
      const pageText = await PageText.find();
      res.render("pageTextEdit", { pageText });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };



exports.getPageText = async (req, res) => {
  try {
    const pageText = await PageText.findById(req.params.id);
    res.render('editPage', {pageText});
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};



// Update Product
exports.updatePageText = async (req, res) => {
  try {
      const pageText = await PageText.findById(req.params.id);

      if (!pageText) {
          return res.status(404).json({ msg: 'Texts not found' });
      }

      // Update other product details
      pageText.title = req.body.title;
      pageText.content = req.body.content;

      await pageText.save();

      res.redirect('/');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
};

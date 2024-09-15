const PageText = require('../models/Page');
const AboutText = require('../models/about');



  exports.getTextEditPage = async (req, res) => {
    try {
      const pageText = await PageText.find();
      res.render("pageTextEdit", { pageText });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  };

  exports.getAboutEditPage = async (req, res) => {
    try {
      const aboutText = await AboutText.find();
      res.render("aboutTextEdit", { aboutText });
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

exports.editAboutPageText = async (req, res) => {
  try {
    const aboutText = await AboutText.findById(req.params.id);
    res.render('aboutEdit', {aboutText});
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

exports.createPageText = async (req, res) => {
  try {
    const { title, content} = req.body;
    const pageText = new PageText({
      title,
      content
    });
    await pageText.save();
    res.redirect('/dashboard/home');
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}

exports.createAboutText = async (req, res) => {
  try {
    const { content} = req.body;
    const aboutText = new AboutText({
      content
    });
    await aboutText.save();
    res.redirect('/dashboard/about');
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}

exports.updateAboutText = async (req, res) => {
  try {
      const aboutText = await AboutText.findById(req.params.id);

      if (!aboutText) {
          return res.status(404).json({ msg: 'Texts not found' });
      }

      // Update other product details
      aboutText.content = req.body.content || aboutText.content;

      await aboutText.save();

      res.redirect('/about');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
};

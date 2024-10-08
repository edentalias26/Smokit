const User = require('../models/User');

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { fName, email, password, phone, shippingAddress } = req.body;

    try {
        const user = new User({ fName, email, password, phone, shippingAddress });
        await user.save();
        req.session.user = user;

      const redirectUrl = req.session.returnTo || '/';
        res.redirect(redirectUrl);
    } catch (error) {
        res.status(400).send('Error registering user');
    }
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).send('Invalid email or password');
        }

        req.session.user = user;
        const redirectUrl = req.session.returnTo || '/';
        res.redirect(redirectUrl);
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};

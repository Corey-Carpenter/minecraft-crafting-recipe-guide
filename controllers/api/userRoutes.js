const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/bcryptUser');

// CREATE a new user

router.get('/signup', async (req, res) => {
    res.render('bcryptsignin');
});

router.get('/login', async (req, res) => {
    res.render('bcryptlogin');
});

// route to create/add a comment using async/await
router.post('/signup', async (req, res) => {
    try { 
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
      // we search the DB for a user with the provided username
      const userData = await User.findOne({ 
        where: { 
            username: req.body.username 
        } 
    });
      if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
      }
      // use `bcrypt.compare()` to compare the provided password and the hashed password
      const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      // if they do not match, return error message
      if (!validPassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
      // if they do match, return success message
      res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
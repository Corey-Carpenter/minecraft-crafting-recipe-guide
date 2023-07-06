// loginRoutes.js
const express = require('express');
const router = express.Router();

// Handle GET request to "/login"
router.get('/login', (req, res) => {
  res.render('login'); // Render the login.handlebars template
});

module.exports = router;

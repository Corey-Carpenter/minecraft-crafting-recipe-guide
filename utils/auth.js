const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    if (req.session.logged_in !== true) {
      res.redirect('/api/users/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
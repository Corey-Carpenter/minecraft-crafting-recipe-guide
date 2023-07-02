const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');

router.use('/comments', commentRoutes);

module.exports = router;
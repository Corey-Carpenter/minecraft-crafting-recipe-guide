const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/', homeRoutes);
router.use('/images', imageRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

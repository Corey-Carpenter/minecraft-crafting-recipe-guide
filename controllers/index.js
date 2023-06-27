const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');

router.use('/', homeRoutes);
router.use('/images', imageRoutes);

module.exports = router;

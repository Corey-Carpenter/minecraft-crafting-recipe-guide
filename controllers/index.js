const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/images', imageRoutes);
router.use('/api', apiRoutes);

module.exports = router;

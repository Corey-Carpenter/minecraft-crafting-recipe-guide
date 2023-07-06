const router = require('express').Router();
const homeRoutes = require('./homeRoutes');;
const apiRoutes = require('./api');
//const craftingRecipeRoutes = require('./craftingRecipeRoutes');
const itemImageRoutes = require('./itemImageRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/search', itemImageRoutes);

module.exports = router;

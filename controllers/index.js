const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');
const apiRoutes = require('./api');
const craftingRecipeRoutes = require('./craftingRecipeRoutes');

router.use('/', homeRoutes);
router.use('/images',imageRoutes);
router.use('/crafting-recipes', craftingRecipeRoutes);
router.use('/api', apiRoutes);


module.exports = router;

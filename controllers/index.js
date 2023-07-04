const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');
const apiRoutes = require('./api');
const craftingRecipeRoutes = require('./craftingRecipeRoutes');
const itemImageRoutes = require('./itemImageRoutes');

router.use('/', homeRoutes);
router.use('/images',imageRoutes);
router.use('/crafting-recipes', craftingRecipeRoutes);
router.use('/api', apiRoutes);
router.use('/search', itemImageRoutes);


module.exports = router;

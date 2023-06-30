const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const imageRoutes = require('./imageRoutes');
const craftingRecipeRoutes = require('./craftingRecipeRoutes');


router.use('/', homeRoutes);
router.use('/images', imageRoutes);
router.use('/crafting-recipes', craftingRecipeRoutes);


module.exports = router;

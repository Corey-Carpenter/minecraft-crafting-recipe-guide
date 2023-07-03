const router = require('express').Router();
const commentRoutes = require('./commentRoutes.js');
const craftingRecipeRoutes = require('./craftingRecipeRoutes');
const imageRoutes = require('./imageRoutes')

router.use('/comments', commentRoutes);
router.use('/images',imageRoutes);
router.use('/crafting-recipes', craftingRecipeRoutes);

module.exports = router;
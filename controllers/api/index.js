const router = require('express').Router();
const commentRoutes = require('./commentRoutes.js');
const craftingRecipeRoutes = require('./craftingRecipeRoutes');
const imageRoutes = require('./imageRoutes')
const loginRoutes = require('./loginRoutes')

router.use('/comments', commentRoutes);
router.use('/images',imageRoutes);
router.use('/crafting-recipes', craftingRecipeRoutes);
router.use('/login', loginRoutes)

module.exports = router;
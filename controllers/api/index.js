const router = require('express').Router();
const commentRoutes = require('./commentRoutes.js');
const imageRoutes = require('./imageRoutes')
const loginRoutes = require('./loginRoutes')

router.use('/comments', commentRoutes);
router.use('/images',imageRoutes);
router.use('/login', loginRoutes)

module.exports = router;
const router = require('express').Router();
const commentRoutes = require('./commentRoutes.js');
const imageRoutes = require('./imageRoutes');
const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/images',imageRoutes);
router.use('/login', loginRoutes)
router.use('/users', userRoutes);

module.exports = router;
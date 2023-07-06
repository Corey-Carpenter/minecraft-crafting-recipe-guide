const router = require('express').Router();
const CraftingRecipe = require('../models/craftingRecipe');
const withAuth = require('../utils/auth');

//get all recipes
router.get('/', withAuth, async (req, res) => {
  const username = req.session.username;
  const recipeData = await CraftingRecipe.findAll();
  allRecipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  res.render('homepage', { allRecipes, username });
});

module.exports = router;

const router = require('express').Router();
const CraftingRecipe = require('../models/craftingRecipe');

//get all recipes
router.get('/', async (req, res) => {
  const recipeData = await CraftingRecipe.findAll();
  allRecipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  res.render('homepage', { allRecipes });
});

module.exports = router;

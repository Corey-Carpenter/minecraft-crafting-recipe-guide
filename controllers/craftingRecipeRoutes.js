const express = require('express');
const router = express.Router();
const CraftingRecipe = require('../models/craftingRecipe');

// GET route to display the drop down menu of the items
router.get('/search', (req, res) => {
  res.render('searchForm');
});

// POST route to handle the search request
router.post('/search', async (req, res) => {
  try {
    const { item } = req.body;

    const recipe = await CraftingRecipe.findOne({
      where: {
        keyword: item,
      },
    });

    res.render('searchResults', { recipe });
  } catch (error) {
    console.error('Error searching for recipe:', error);
    res.status(500).json({ error: 'Failed to search for recipe' });
  }
});

module.exports = router;

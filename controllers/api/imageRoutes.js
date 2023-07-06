const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const CraftingRecipe = require('../../models/craftingRecipe');


// GET route to retrieve images from Cloudinary
router.get('/:id', async(req, res) => {
  // findOne method
  const recipeData = await CraftingRecipe.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'keyword', 'imageUrl']
  })
  const individualRecipe = recipeData.get({ plain: true });
  res.render('images', { individualRecipe });
});

module.exports = router;

/*
router.get('/', async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const images = await cloudinary.api.resources();
    res.render('images', { images }); // Pass the retrieved images to the Handlebars template
  } catch (error) {
    console.error('Error retrieving images:', error);
    res.status(500).json({ error: 'Failed to retrieve images' });
  }
});
*/

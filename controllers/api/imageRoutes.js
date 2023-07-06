const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

// GET route to retrieve images from Cloudinary
router.get('/api/crafting-recipes/search', async (req, res) => {
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

module.exports = router;

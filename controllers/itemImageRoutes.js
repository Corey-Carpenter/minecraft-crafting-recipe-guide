const express = require('express');
const router = express.Router();
const itemimageMap = require('../image-uploader/itemImageMap.js');
const { User, CraftingRecipe } = require('../models');

const saveUserSelection = async (req, res, next) => {
    try {
      const selectedItem = req.body.item;
      const imageURL = req.body.imageURL;
  
      // Store the user's selection in the users table
      const user = await User.create({
        username: req.body.username,
        keyword: selectedItem,
      });
  
      // Store the user's selection in the craftingrecipe table
      const recipe = await CraftingRecipe.create({
        keyword: selectedItem,
        imageURL: imageURL,
      });
  
      // Pass the imageURL to the next middleware or route handler
      req.imageURL = imageURL;
      next();
    } catch (err) {
      console.error('Error storing user selection:', err);
      res.status(500).json({ error: 'Failed to store user selection' });
    }
  };

router.post('/search', saveUserSelection, (req, res) => {
    // Access the imageURL from the previous middleware
    const imageURL = req.imageURL;
  
    res.render('searchResults', { imageURL });
  });
  
module.exports = saveUserSelection;
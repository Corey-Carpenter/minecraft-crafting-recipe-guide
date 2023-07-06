const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const CraftingRecipe = require('../../models/craftingRecipe');
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async(req, res) => {
  // findOne method
  const username = req.session.username;
  const commentData = await Comment.findAll({
    where: {
        image_id: req.params.id
    },
    attributes: ['id', 'text', 'image_id', 'createdAt']
  })
  const recipeData = await CraftingRecipe.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'keyword', 'imageUrl']
  });
  let matchingComments = [];
  if(!commentData) {
    matchingComments == "";
  }
  else {
    matchingComments = commentData.map((comment) => comment.get({ plain: true }));
  }
  const individualRecipe = recipeData.get({ plain: true });
  res.render('images', { matchingComments, individualRecipe, username });
});

module.exports = router;

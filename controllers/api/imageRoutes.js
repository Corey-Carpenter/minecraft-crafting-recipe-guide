const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const CraftingRecipe = require('../../models/craftingRecipe');
const Comment = require('../../models/Comment');

async function getComments(req, res) {
  const commentData = await Comment.findAll().catch((err) => {
    res.json(err);
  });
  allComments = commentData.map((comment) => comment.get({ plain: true }));
  console.log(allComments);
};

let allComments = [];
getComments();

router.get('/:id', async(req, res) => {
  // findOne method
  const recipeData = await CraftingRecipe.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'keyword', 'imageUrl']
  })
  const individualRecipe = recipeData.get({ plain: true });
  res.render('images', { individualRecipe, allComments });
});

module.exports = router;

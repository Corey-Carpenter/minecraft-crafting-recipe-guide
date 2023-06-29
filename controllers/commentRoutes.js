const router = require('express').Router();
const Comment = require('../models/Comment');

//this function will be attached to an event listener on the SUBMIT button beneath the crafting recipe images
function createComment {
  router.post('/', async (req, res) => {
    const commentData = await Comment.create(req.body);
  
    return res.json(commentData);
  });
};
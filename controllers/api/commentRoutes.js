const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    text: req.body.text,
    });
    res.status(200).json(commentData)
  } catch (err) {
    res.status(400).json(err);
  }
});

//get one comment
router.get('/:id', async (req, res) => {
  // This method renders the 'comment' template, and uses params to select the correct comment to render in the template, based on the id of the comment.
  return res.render('comment', Comment[req.params.id]);
});

module.exports = router;

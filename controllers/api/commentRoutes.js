const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', withAuth, async (req, res) => {
  const commentData = await Comment.findAll({
    order: [
      ['createdAt', 'DESC']
  ],
  });
  const allComments = commentData.map((comment) => comment.get({ plain: true }));
  res.render('comments', { allComments });
});

//get one comment
router.get('/:id', async(req, res) => {
  // findOne method
  const commentData = await Comment.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'text', 'image_id', 'createdAt']
  })
  const individualComment = commentData.get({ plain: true });
  res.render('comments', { individualComment });
});

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData)
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a comment
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
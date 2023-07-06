const router = require('express').Router();
const Comment = require('../../models/Comment');

//get all comments
router.get('/', async (req, res) => {
  const commentData = await Comment.findAll();
  allComments = commentData.map((comment) => comment.get({ plain: true }));
  res.render('comments', { allComments });
});

//get one comment
router.get('/:id', async(req, res) => {
  // findOne method
  const commentData = await Comment.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'text', 'createdAt']
  })
  const individualComment = commentData.get({ plain: true });
  res.render('comments', { individualComment });
});

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    text: req.body.text
    //image_id: req.body.image_id
    });
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

/*
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

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    text: req.body.text,
    image_id: req.body.image_id
    });
    res.status(200).json(commentData)
    console.log(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
*/

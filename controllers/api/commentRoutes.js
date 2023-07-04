const router = require('express').Router();
const Comment = require('../../models/Comment');

//get one comment
router.get('/', async (req, res) => {
  const commentData = await Comment.findAll();
  allComments = commentData.map((comment) => comment.get({ plain: true }));
  res.render('comments', { allComments });
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

module.exports = router;

/*
router.post('/', (req, res) => {
    // create instance of Comment object
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id!' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
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

//get one comment
router.get('/', async (req, res) => {
    const commentData = await Comment.findAll();
    allComments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(allComments);
    res.render('comments', { allComments });
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

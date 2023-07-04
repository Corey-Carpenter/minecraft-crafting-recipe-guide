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
router.get('/', async (req, res) => {
  const commentData = await Comment.findAll();
  allComments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(allComments);
  res.render('comments', { allComments });
});

module.exports = router;

/*
const router = require('express').Router();
const { Comment, User } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
        include: 
            {
                model: User,
                attributes: ['username']
            }
        
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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

module.exports = router;
*/

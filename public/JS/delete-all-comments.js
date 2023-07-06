const Comment = require('../../models/Comment');
const sequelize = require('../../config/connection');

//run node public/JS/delete-all-comments.js to delete all comments
Comment.sync({ force: true });
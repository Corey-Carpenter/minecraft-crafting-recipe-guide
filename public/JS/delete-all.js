const Comment = require('../../models/Comment');
const sequelize = require('../../config/connection');

//run node public/JS/delete-all.js to delete all comments (using while I test the feature)
Comment.sync({ force: true });
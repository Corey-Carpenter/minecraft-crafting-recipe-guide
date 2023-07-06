const User = require('../../models/bcryptUser');
const sequelize = require('../../config/connection');

//run node public/JS/delete-all-users.js to delete all users
User.sync({ force: true });
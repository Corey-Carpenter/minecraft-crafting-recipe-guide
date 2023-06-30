const User = require('./user.js');
const CraftingRecipe = require('./craftingRecipe.js');
const Comment = require('./Comment.js');


//User has many crafting recipes
User.hasMany(CraftingRecipe, {
    foreignKey: 'user_id',
});

//User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//The Crafting Recipes belongs to the User
CraftingRecipe.belongsTo(User, {
    foreignKey: 'user_id',
});

//The Comment belongs to the user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, CraftingRecipe, Comment };

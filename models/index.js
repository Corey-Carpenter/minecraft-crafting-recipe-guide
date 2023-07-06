const User = require('./user.js');
const CraftingRecipe = require('./craftingRecipe.js');
const Comment = require('./Comment.js');

/*
//User has many crafting recipes
User.hasMany(CraftingRecipe, {
    foreignKey: 'user_id',
});

//The Crafting Recipes belongs to the User
CraftingRecipe.belongsTo(User, {
    foreignKey: 'user_id',
});

//User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//The Comment belongs to the user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
*/

//Crafting recipe images have many comments
CraftingRecipe.hasMany(Comment, {
    foreignKey: 'image_id',
    allowNull: true,
    onDelete: 'CASCADE'
});

//Comments belong to one crafting recipe image
Comment.belongsTo(CraftingRecipe, {
    foreignKey: 'image_id',
    allowNull: true, 
    onDelete: 'CASCADE'
});


module.exports = { User, CraftingRecipe, Comment };

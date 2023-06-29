const User = require('./user.js');
const CraftingRecipe = require('./craftingRecipe.js');


//User has many crafting recipes
User.hasMany(CraftingRecipe, {
    foreignKey: 'user_id',
});

//The Crafting Recipes belongs to the User
CraftingRecipe.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, CraftingRecipe };

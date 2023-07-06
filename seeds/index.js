const sequelize = require('../config/connection');
const CraftingRecipe = require('../models/craftingRecipe.js');
const recipeData = require('./recipeData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await CraftingRecipe.beforeBulkCreate((recipeData, options) => {
        for (const recipe of recipeData) {
          recipe.keyword = recipe.keyword.replace(/[_-]/g, " ").toUpperCase();
        }
    });
    await CraftingRecipe.bulkCreate(recipeData);
    console.log("Recipes seeded");
    process.exit(0);
};
  
seedDatabase();
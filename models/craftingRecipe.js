const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class CraftingRecipe extends Model {}

//This will be for identifying the image of crafting recipes. 
CraftingRecipe.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type:DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'craftingRecipe',
}
);

module.exports = CraftingRecipe;
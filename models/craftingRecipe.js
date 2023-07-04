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
    keyword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'craftingrecipe',
}
);

module.exports = CraftingRecipe;
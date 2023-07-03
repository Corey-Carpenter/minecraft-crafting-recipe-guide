const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

//This will be for id'ing comments and connecting them to a user_id. 
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: { 
               args: [1],
               msg: "Comment cannot be blank."
            }
         }
    }
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
}
);

//comments will have an id, a body with text, and timestamps. A foreign key "user_id" will tie the comment to a single user

//exported to index.js and commentRoutes.js
module.exports = Comment;

/*
user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },

image_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
        references: {
            // this did the trick!
            onDelete: 'set null',
            model: 'craftingRecipe',
            key: 'id'
        }
    }
*/
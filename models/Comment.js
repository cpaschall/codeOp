// const {Model, DataTypes} = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');
// class Comment extends Model {}

// Comment.init({
//     id:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement:true,
//     },
//     commentData:{
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             len: [1]
//         }
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'user',
//             key: 'id'
//         }
//     },
//     post_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'post',
//             key: 'id'
//         }
//     }, 
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'comment',
    
    
// })
// modeule.exports = Comment;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {} 

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        proj_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('language').split(', ')
            },
            set(val) {
                this.setDataValue('language', val.join(', '));
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;
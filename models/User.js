const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(
  {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    }, 
    proj_own: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
          return this.getDataValue('proj_own').split(', ')
      },
      set(val) {
          this.setDataValue('proj_own', val.join(', '));
      },
    },
    proj_contrib: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
          return this.getDataValue('proj_contrib').split(', ')
      },
      set(val) {
          this.setDataValue('proj_contrib', val.join(', '));
      },
    },
    proj_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id'
      }, 
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
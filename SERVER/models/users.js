'use strict';
const {
  Model
} = require('sequelize');
const { encryptPassword } = require('../../../Project-codigram/llatian/helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.orders)
      users.hasMany(models.products)
      users.hasMany(models.shopping_cart)
    }
  }
  users.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_salt: DataTypes.STRING,
    user_birthdate: DataTypes.DATE,
    user_gender: DataTypes.STRING,
    user_avatar: DataTypes.STRING,
    user_type: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:function(users,option){
        users.user_password = encryptPassword(users.user_password) 
      }
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};
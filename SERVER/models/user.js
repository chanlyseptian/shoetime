const { encryptPassword } = require("../helper/bcrypt");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.order);
      user.hasMany(models.product);
      user.hasMany(models.shoppingCart);
    }
  }
  user.init(
    {
      userName: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      userSalt: DataTypes.STRING,
      userBirthdate: DataTypes.DATE,
      userGender: DataTypes.STRING,
      userAvatar: DataTypes.STRING,
      userType: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (user, option) {
          user.userPassword = encryptPassword(user.userPassword);
        },
        beforeUpdate: function (user, option) {
          user.userPassword = encryptPassword(user.userPassword);
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

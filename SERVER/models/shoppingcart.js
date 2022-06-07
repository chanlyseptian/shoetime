'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shoppingCart.belongsTo(models.user)
      shoppingCart.belongsToMany(models.order, { through: models.lineItem })
    }
  }
  shoppingCart.init({
    shopCreatedOn: DataTypes.DATE,
    shopStatus: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shoppingCart',
  });
  return shoppingCart;
};
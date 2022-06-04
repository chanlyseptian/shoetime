'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lineItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lineItem.belongsTo(models.order)
      lineItem.belongsTo(models.product)
      lineItem.belongsTo(models.shoppingCart)
    }
  }
  lineItem.init({
    lineQty: DataTypes.INTEGER,
    lineStatus: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lineItem',
  });
  return lineItem;
};
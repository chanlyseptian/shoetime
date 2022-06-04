'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user)
      order.belongsToMany(models.product, { through: models.lineItem })
    }
  }
  order.init({
    orderCreated_on: DataTypes.DATE,
    orderSubtotal: DataTypes.INTEGER,
    orderDiscount: DataTypes.INTEGER,
    orderTax: DataTypes.INTEGER,
    orderTotalDue: DataTypes.INTEGER,
    orderTotalQty: DataTypes.INTEGER,
    orderPaytTrxNumber: DataTypes.INTEGER,
    orderCity: DataTypes.STRING,
    orderAddress: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
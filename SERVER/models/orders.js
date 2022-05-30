'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    order_created_on: DataTypes.DATE,
    order_subtotal: DataTypes.INTEGER,
    order_discount: DataTypes.INTEGER,
    order_tax: DataTypes.INTEGER,
    order_total_due: DataTypes.INTEGER,
    order_total_qty: DataTypes.INTEGER,
    order_payt_trx_number: DataTypes.INTEGER,
    order_city: DataTypes.STRING,
    order_address: DataTypes.STRING,
    order_status: DataTypes.STRING,
    order_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};
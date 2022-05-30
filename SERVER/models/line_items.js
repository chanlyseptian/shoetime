'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      line_items.belongsTo(models.orders)
      line_items.belongsTo(models.products)
      line_items.belongsTo(models.line_items)
    }
  }
  line_items.init({
    line_qty: DataTypes.INTEGER,
    line_status: DataTypes.STRING,
    line_prod_id: DataTypes.INTEGER,
    line_shop_id: DataTypes.INTEGER,
    line_order_name: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'line_items',
  });
  return line_items;
};
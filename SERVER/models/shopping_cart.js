'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shopping_cart.belongsTo(models.users)
      shopping_cart.belongsToMany(models.orders,{through:models.line_items})
      shopping_cart.belongsToMany(models.products,{through:models.line_items})
    }
  }
  shopping_cart.init({
    shop_created_on: DataTypes.DATE,
    shop_status: DataTypes.STRING,
    shop_user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};
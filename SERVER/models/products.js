'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsToMany(models.orders, { through: models.line_items })
      products.belongsToMany(models.shopping_cart,{through:models.line_items})
      products.belongsTo(models.users)
      products.hasOne(models.products_images)
    }
  }
  products.init({
    prod_name: DataTypes.STRING,
    prod_desc: DataTypes.STRING,
    prod_price: DataTypes.INTEGER,
    prod_stock: DataTypes.INTEGER,
    prod_expire: DataTypes.DATE,
    prod_weight: DataTypes.INTEGER,
    prod_category: DataTypes.STRING,
    prod_brand: DataTypes.STRING,
    prod_condition: DataTypes.STRING,
    prod_total_sold: DataTypes.INTEGER,
    prod_rating: DataTypes.INTEGER,
    prod_views: DataTypes.INTEGER,
    prod_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasMany(models.productsImage)
      product.belongsTo(models.user)
      product.belongsToMany(models.order, { through: models.lineItem })
    }
  }
  product.init({
    prodName: DataTypes.STRING,
    prodDesc: DataTypes.STRING,
    prodPrice: DataTypes.INTEGER,
    prodStock: DataTypes.INTEGER,
    prodExpire: DataTypes.DATE,
    prodWeight: DataTypes.INTEGER,
    prodCategory: DataTypes.STRING,
    prodBrand: DataTypes.STRING,
    prodCondition: DataTypes.STRING,
    prodTotalSold: DataTypes.INTEGER,
    prodRating: DataTypes.INTEGER,
    prodViews: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};
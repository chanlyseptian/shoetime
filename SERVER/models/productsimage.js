'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productsImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productsImage.belongsTo(models.product)
    }
  }
  productsImage.init({
    primFilename: DataTypes.STRING,
    primFilesize: DataTypes.STRING,
    primFiletype: DataTypes.STRING,
    primPrimary: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productsImage',
  });
  return productsImage;
};
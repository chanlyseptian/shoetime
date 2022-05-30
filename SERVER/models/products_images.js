'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products_images.init({
    prim_filename: DataTypes.STRING,
    prim_filesize: DataTypes.STRING,
    prim_filetype: DataTypes.STRING,
    prim_primary: DataTypes.BOOLEAN,
    prim_prod_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products_images',
  });
  return products_images;
};
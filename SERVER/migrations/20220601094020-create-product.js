'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prodName: {
        type: Sequelize.STRING
      },
      prodDesc: {
        type: Sequelize.STRING
      },
      prodPrice: {
        type: Sequelize.INTEGER
      },
      prodStock: {
        type: Sequelize.INTEGER
      },
      prodExpire: {
        type: Sequelize.DATE
      },
      prodWeight: {
        type: Sequelize.INTEGER
      },
      prodCategory: {
        type: Sequelize.STRING
      },
      prodBrand: {
        type: Sequelize.STRING
      },
      prodCondition: {
        type: Sequelize.STRING
      },
      prodTotalSold: {
        type: Sequelize.INTEGER
      },
      prodRating: {
        type: Sequelize.INTEGER
      },
      prodViews: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
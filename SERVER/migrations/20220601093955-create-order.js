'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderCreated_on: {
        type: Sequelize.DATE
      },
      orderSubtotal: {
        type: Sequelize.INTEGER
      },
      orderDiscount: {
        type: Sequelize.INTEGER
      },
      orderTax: {
        type: Sequelize.INTEGER
      },
      orderTotalDue: {
        type: Sequelize.INTEGER
      },
      orderTotalQty: {
        type: Sequelize.INTEGER
      },
      orderPaytTrxNumber: {
        type: Sequelize.INTEGER
      },
      orderCity: {
        type: Sequelize.STRING
      },
      orderAddress: {
        type: Sequelize.STRING
      },
      orderStatus: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('orders');
  }
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productsImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primFilename: {
        type: Sequelize.STRING
      },
      primFilesize: {
        type: Sequelize.STRING
      },
      primFiletype: {
        type: Sequelize.STRING
      },
      primPrimary: {
        type: Sequelize.BOOLEAN
      },
      productId: {
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
    await queryInterface.dropTable('productsImages');
  }
};
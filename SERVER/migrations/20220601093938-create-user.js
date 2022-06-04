'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      userEmail: {
        type: Sequelize.STRING
      },
      userPassword: {
        type: Sequelize.STRING
      },
      userSalt: {
        type: Sequelize.STRING
      },
      userBirthdate: {
        type: Sequelize.DATE
      },
      userGender: {
        type: Sequelize.STRING
      },
      userAvatar: {
        type: Sequelize.STRING
      },
      userType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('users');
  }
};
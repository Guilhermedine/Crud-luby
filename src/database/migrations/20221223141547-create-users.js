'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
      },
      cpf: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      biography: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};

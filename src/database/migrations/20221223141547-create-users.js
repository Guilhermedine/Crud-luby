'use strict';
require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, S) {
    return queryInterface.createTable('users', {
      id: {
        type: S.UUID,
        defaultValue: S.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cpf: {
        type: S.STRING,
        allowNull: false,
      },
      name: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
        unique: true,
        allowNull: false,
      },
      password_hash: {
        type: S.STRING,
        allowNull: false,
      },
      created_at: {
        type: S.DATE,
        allowNull: false,

      },
      updated_at: {
        type: S.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: S.DATE,
        allowNull: false,
      }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

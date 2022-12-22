'use strict';

const sequelize = require('../../../sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id:
      {

      },
      cpf: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      biografia:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deteled_at:
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');

  }
};

sequelize.define('users', {})

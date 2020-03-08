'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Coordenador', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        celular: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        dtExpiracao: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue:'1900-01-01'
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Coordenador');
  }
};

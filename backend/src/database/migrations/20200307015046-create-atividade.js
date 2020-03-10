'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Atividade', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      conteudo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['Resposta Aberta', 'Teste']]
        }
      },
      extras: {
        type: Sequelize.STRING,
        allowNull: true
      },
      IdProfessor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Atividade');
  }
};

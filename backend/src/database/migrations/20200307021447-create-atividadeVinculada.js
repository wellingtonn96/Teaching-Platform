'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AtividadeVinculada', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idAtividade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Atividade', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idProfessor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDisciplinaOfertada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'DisciplinaOfertada', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      rotulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dtInicioRespostas: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dtFimRespostas: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AtividadeVinculada');
  }
};

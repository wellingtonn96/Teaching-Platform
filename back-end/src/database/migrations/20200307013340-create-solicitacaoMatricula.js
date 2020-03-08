'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SolicitacaoMatricula', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idAluno: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Aluno', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idDisciplinaOfertada: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'DisciplinaOfertada', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dtSolicitacao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      idCoordenador: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Coordenador', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Solicitada',
        validate: {
          isIn: [['Solicitada', 'Aprovada', 'Rejeitada', 'Cancelada']],
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SolicitacaoMatricula');
  }
};

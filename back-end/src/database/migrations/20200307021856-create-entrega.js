'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entrega', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idAluno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Aluno', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idAtividadeVinculada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'AtividadeVinculada', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resposta: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DtEntrega: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Entregue',
        validate: {
          isIn: [['Entregue', 'Corrigido']],
        }
      },
      idProfessor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nota: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        validate: {
          isDecimal: true,
          len: [0.00, 10.00]
        }
      },
      dtAvaliacao: {
        type: Sequelize.DATE,
        allowNull: true
      },
      obs: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entrega');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mensagem', {
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
      idProfessor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      assunto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      referência: {
        type: Sequelize.STRING,
        allowNull: false
      },
      conteúdo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: 'Lido',
        validate: {
          isIn: [['Entregue', 'Lido', 'Respondido']],
        }
      },
      dtEnvio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dtResposta: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      resposta: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mensagem');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DisciplinaOfertada', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idCoordenador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Coordenador', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dtInicioMatricula: {
        type: Sequelize.DATE,
        allowNull: true
      },
      dtFimMatricula: {
        type: Sequelize.DATE,
        allowNull: true
      },
      idDisciplina: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Disciplina', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idCurso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Curso', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [1900, 2100]
        }
      },
      semestre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 2]
        }
      },
      turma: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: ['^[A-Za-z0-9_.]+$'],
        }
      },
      idProfessor: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      metodologia: {
        type: Sequelize.STRING,
        allowNull: true
      },
      recursos: {
        type: Sequelize.STRING,
        allowNull: true
      },
      criterioAvaliacao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      planoDeAulas: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DisciplinaOfertada');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Disciplina', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        data: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          allowNull:false
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'Aberta',
          validate: {
            isIn: [['Aberta', 'Fechada']], 
          }
        },
        planoDeEnsino: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cargaHoraria: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isIn: [[40, 80]], 
          }
        },
        competencias: {
          type: Sequelize.STRING,
          allowNull: false
        },
        habilidades: {
          type: Sequelize.STRING,
          allowNull: false
        },
        ementa: {
          type: Sequelize.STRING,
          allowNull: false
        },
        conteudoProgramatico: {
          type: Sequelize.STRING,
          allowNull: false
        },
        bibliografiaBasica: {
          type: Sequelize.STRING,
          allowNull: false
        },
        bibliografiaComplementar: {
          type: Sequelize.STRING,
          allowNull: false
        },
        percentualPratico: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            len: [0, 100]
          }
        },
        percentualTeorico: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            len: [0, 100]
          }
        },
        idCoordenador: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Coordenador', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Disciplina');
  }
};

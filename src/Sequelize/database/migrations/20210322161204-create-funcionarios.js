// eslint-disable-next-line strict
'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('funcionarios', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Filiacao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    b_i: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    data_nascimento: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    provincia: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    grau_academico: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    funcao: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    },
    image_url:{
      type: Sequelize.STRING
    },
    arquivo_url: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('funcionarios');
  }
};

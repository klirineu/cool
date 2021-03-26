const { Model, DataTypes } = require('sequelize')

class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Filiacao: {
        type: DataTypes.STRING,
        allowNull: false
      },
      b_i: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      data_nascimento: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      grau_academico: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      endereco: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      funcao: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      image_url:{
        type: DataTypes.STRING
      },
      arquivo_url: {
        type: DataTypes.STRING
      },
    }, {
      sequelize,
      tableName: "funcionarios",
    })
  }
}

module.exports = Funcionario
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require("../models/User")
const Funcionario = require('../models/Funcionario')

const connection = new Sequelize(dbConfig)

User.init(connection)
Funcionario.init(connection)

module.exports = connection
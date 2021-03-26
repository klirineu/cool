const express = require('express')
const UserController = require('./controllers/UserController')
const FuncionarioController = require('./controllers/FuncionarioController')
const AuthController = require("./controllers/AuthController")

const authMiddleware = require("./middlewares/authenticate");

const routes =  express.Router()

routes.post("/users/authenticate", AuthController.authenticate);

routes.use(authMiddleware)

routes.post("/users", UserController.store)

routes.get("/users/funcionarios", FuncionarioController.index)
routes.post("/users/funcionarios", FuncionarioController.store)

module.exports = routes
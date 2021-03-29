/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
//import io from "socket.io-client"

import './style.css';
import img_user from "../../images/user1.png"

import api from "../../services/api"



function Dashboard() {
  const [funcionarios, setFuncionarios] = useState([])
  const [name, setName] = useState("") 
  const [Filiacao, setFiliacao] = useState("")
  const [b_i, setBI] = useState("")
  const [data_nascimento, setDataNascimento] = useState("")
  const [provincia, setProvincia] = useState("")
  const [grau_academico, setGrauAcademico] = useState("")
  const [endereco, setEndereco] = useState("")
  const [funcao, setFuncao] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  const history = useHistory()

  const token = localStorage.getItem("token")
  const Auth = `Bearer ${token}`

/** */

  useEffect(() => {
    async function handleFuncionarios() {
      await api.get("/users/funcionarios", { headers: { Authorization: Auth } }).then(res => {
        setFuncionarios(res.data)
        
      }).catch(error => {
        console.log(error)
      })
    }
    handleFuncionarios()
  }, [Auth])
/*
  function registerSocket() {
    const socket = io("http://localhost:3333")

    socket.on("funcionarios", newFuncionario => {
      console.log(newFuncionario)
      setFuncionarios([...funcionarios, newFuncionario])
    })
  }
  registerSocket()
*/

  function openCadastro() {
    var cadastro = document.getElementById("cadastro-funcionario")
    var funcionario = document.getElementById("funcionarios")
    var perfilAdmin = document.getElementById("perfil-admin")
    cadastro.style.display = "block"
    funcionario.style.display = "none"
    perfilAdmin.style.display = "none"
  }

  function openFuncionarios() {
    var cadastro = document.getElementById("cadastro-funcionario")
    var funcionario = document.getElementById("funcionarios")
    var perfilAdmin = document.getElementById("perfil-admin")
    funcionario.style.display = "block"
    cadastro.style.display = "none"
    perfilAdmin.style.display = "none"
  }

  function openPerfilAdmin() {
    var cadastro = document.getElementById("cadastro-funcionario")
    var funcionario = document.getElementById("funcionarios")
    var perfilAdmin = document.getElementById("perfil-admin")
    perfilAdmin.style.display = "block"
    funcionario.style.display = "none"
    cadastro.style.display = "none"

  }

  function handleClickCadastro(e) {
    api.post("/users/funcionarios", { name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email }, { headers: { Authorization: Auth } }).then(res => {
      window.location.reload()
      openFuncionarios()
    }).catch(error => {
      alert("houve algum erro ao cadastrar usuario")
    })
  }

  function handleClickSair() {
    localStorage.clear()
    history.push("/")
  }

  return (
    <div className="container-dashboard">
      <header><strong onClick={() => openFuncionarios()}>FUNCIONÁRIOS</strong><strong onClick={() => openCadastro()}>CADASTRAR FUNCIONÁRIO</strong><strong className="perfil_user"  onClick={() => openPerfilAdmin()}>PERFIL</strong><img src={img_user}/></header>
      <div id="funcionarios">

        <h1>FUNCIONÁRIOS</h1>
        <ul>{funcionarios.map(funcionario => (
          <li key={funcionario.id}>
            <strong>Nome: {funcionario.name}</strong>{"  "}
            <strong>Filiação: {funcionario.Filiacao}</strong>
            <strong>B.I nº: {funcionario.b_i}</strong>
            <strong>Data de Nascimento: {funcionario.data_nascimento}</strong>
            <strong>Provincia: {funcionario.provincia}</strong>
            <strong>Grau Acadêmico: {funcionario.grau_academico}</strong>
            <strong>Endereço: {funcionario.endereco}</strong>
            <strong>Função: {funcionario.funcao}</strong>
            <strong>Telefone: {funcionario.telefone}</strong>
            <strong>E-mail: {funcionario.email}</strong>
          </li>
        ))}</ul>
      </div>

      <div id="cadastro-funcionario">
        <div>
          <strong>Nome do Funcionário</strong>{" "} <input type="text"name="setName"
             onChange={e => setName(e.target.value)}/><br/><br/>
          <strong>Filiação</strong>{" "} <input type="text" name="setFiliacao"
        onChange={e => setFiliacao(e.target.value)}/><br/><br/>
          <strong>B.I nº</strong>{" "} <input type="text" name="setBI"
        onChange={e => setBI(e.target.value)}/><br/><br/>
          <strong>Data de Nascimento</strong>{" "} <input type="text" name="setDataNascimento"
        onChange={e => setDataNascimento(e.target.value)}/><br/><br/>
          <strong>Provincia</strong>{" "} <input type="text" name="setProvincia"
        onChange={e => setProvincia(e.target.value)}/><br/><br/>
          <strong>Grau Acadêmico</strong>{" "} <input type="text" name="setGrauAcademico"
        onChange={e => setGrauAcademico(e.target.value)}/><br/><br/>
          <strong>Endereço</strong>{" "} <input type="text" name="setEndereco"
        onChange={e => setEndereco(e.target.value)}/><br/><br/>
          <strong>Função</strong>{" "} <input type="text" name="setFuncao"
        onChange={e => setFuncao(e.target.value)}/><br/><br/>
          <strong>Telefone</strong>{" "} <input type="text" name="setTelefone"
        onChange={e => setTelefone(e.target.value)}/><br/><br/>
          <strong>E-mail</strong>{" "} <input type="text" name="setEmail"
        onChange={e => setEmail(e.target.value)}/><br/><br/>
          <button type="submit" onClick={e => handleClickCadastro(e)}>Cadastrar</button>
        </div>
      </div>

      <div id="perfil-admin">
        <div>
          <button onClick={() =>  handleClickSair()}>Sair</button>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;
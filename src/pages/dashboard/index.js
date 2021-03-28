/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import io from "socket.io-client"

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

  const token = localStorage.getItem("token")
  const Auth = `Bearer ${token}`

  useEffect(() => {
    async function handleFuncionarios() {
      await api.get("/users/funcionarios", { headers: { Authorization: Auth } }).then(res => {
        console.log(res.data)
        setFuncionarios(res.data)
        
      }).catch(error => {
        console.log(error)
      })
    }
    handleFuncionarios()
  }, [Auth])

  function registerSocket() {
    const socket = io("http://localhost:3333")

    socket.on("funcionarios", newFuncionario => {
      setFuncionarios([...funcionarios, newFuncionario])
    })
  }

  registerSocket()

  function openCadastro() {
    var cadastro = document.getElementById("cadastro-funcionario")
    var funcionario = document.getElementById("funcionarios")
    funcionario.style.display = "none"
    cadastro.style.display = "block"
  }

  function openFuncionarios() {
    var cadastro = document.getElementById("cadastro-funcionario")
    var funcionario = document.getElementById("funcionarios")
    funcionario.style.display = "block"
    cadastro.style.display = "none"
  }

  function handleClickCadastro(e) {
    api.post("/users/funcionarios", { name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email }, { headers: { Authorization: Auth } }).then(res => {
      openFuncionarios()
    }).catch(error => {
      alert("houve algum erro ao cadastrar usuario")
    })
  }


  return (
    <div className="container-dashboard">
      <header><strong onClick={() => openFuncionarios()}>FUNCIONÁRIOS</strong><strong onClick={() => openCadastro()}>CADASTRAR FUNCIONÁRIO</strong><strong className="perfil_user">PERFIL</strong><img src={img_user}/></header>
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
          <strong>Nome do Funcionário</strong>{" "} <input type="text"name="name"
             onChange={e => setName(e.target.value)}/><br/><br/>
          <strong>Filiação</strong>{" "} <input type="text" name="name"
        onChange={e => setFiliacao(e.target.value)}/><br/><br/>
          <strong>B.I nº</strong>{" "} <input type="text" name="name"
        onChange={e => setBI(e.target.value)}/><br/><br/>
          <strong>Data de Nascimento</strong>{" "} <input type="text" name="name"
        onChange={e => setDataNascimento(e.target.value)}/><br/><br/>
          <strong>Provincia</strong>{" "} <input type="text" name="name"
        onChange={e => setProvincia(e.target.value)}/><br/><br/>
          <strong>Grau Acadêmico</strong>{" "} <input type="text" name="name"
        onChange={e => setGrauAcademico(e.target.value)}/><br/><br/>
          <strong>Endereço</strong>{" "} <input type="text" name="name"
        onChange={e => setEndereco(e.target.value)}/><br/><br/>
          <strong>Função</strong>{" "} <input type="text" name="name"
        onChange={e => setFuncao(e.target.value)}/><br/><br/>
          <strong>Telefone</strong>{" "} <input type="text" name="name"
        onChange={e => setTelefone(e.target.value)}/><br/><br/>
          <strong>E-mail</strong>{" "} <input type="text" name="name"
        onChange={e => setEmail(e.target.value)}/><br/><br/>
          <button onClick={() => handleClickCadastro()}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
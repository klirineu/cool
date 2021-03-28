/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react';
import './style.css';

import { useHistory } from "react-router-dom"

import logo from "../../images/logo.png"

import api from "../../services/api"

export default function Log(props) {
  const history = useHistory()

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(history)
  
  function handleClick() {
    
    if (name === "" || password === "") {
      return alert("Login inválido");
    }

    api
      .post("/users/authenticate", { name, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard")
        return;
      })
      .catch(err => {
        let error = new Error("Usuário ou senha inválidos");
        alert(error);
      });
  }

  return (
    <div className="container-log">
      
      <div>
          <h2>FAÇA LOGIN</h2>
          <input type="text" name="name"
        onChange={e => setName(e.target.value)}
        id="user"placeholder="Nome"/><br/><br/>
          <input name="password"
        onChange={e => setPassword(e.target.value)}
        id="pass"
        type="password" placeholder="Senha"/><br/><br/>
          <button onClick={handleClick}>Entrar</button>
          <img src={logo}/>
      </div>
      
    </div>
  )
}

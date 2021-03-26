import {useState} from 'react';
import './style.css';

import api from "../../services/api"

export default function Log(props) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, password)
  function handleClick(props) {
    
    
    if (name === "" || password === "") {
      return alert("Login inválido");
    }

    api
      .post("/users/authenticate", { name, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "http://localhost:3000/dashboard"
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
      </div>
    </div>
  )
}

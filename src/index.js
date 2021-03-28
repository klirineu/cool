import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./auth/index";

import Home from "./App";
import Dashboard from "./pages/dashboard/index.js";

ReactDOM.render(
  <Router>
    <div>
    <main>
      <Route  exact path="/" component={Home}/>
      <PrivateRoute path="/dashboard" component={Dashboard}/>
    </main>
    </div>
  </Router>,
  document.getElementById('root')
);
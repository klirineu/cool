import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./auth/index";

import Log from "./pages/log/index.js";
import Dashboard from "./pages/dashboard/index.js";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Log} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
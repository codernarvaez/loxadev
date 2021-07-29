import React from "react";
import { useSelector } from "react-redux";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { PrivateRoute } from "router/PrivateRoute";
import { history } from "utils/history";

export const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "router/PublicRoute";
import { history } from "utils/history";
import { Home } from "pages";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute loggedIn={loggedIn} component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

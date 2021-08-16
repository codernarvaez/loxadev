import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "router/PublicRoute";
import { history } from "utils/history";
import { Article, Home } from "pages";
import { useSelector } from "react-redux";
import { PrivateRoute } from "router/PrivateRoute";

export const AppRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" loggedIn={loggedIn} component={Home} />
        <PrivateRoute
          exact
          path="/articulo"
          loggedIn={!loggedIn}
          component={Article}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

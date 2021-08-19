import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "utils/history";
import { Article, ContactUs, Home } from "pages";
import { PrivateRoute } from "router/PrivateRoute";
import { PublicRoute } from "router/PublicRoute";

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
        <PrivateRoute
          exact
          path="/contactanos"
          loggedIn={!loggedIn}
          component={ContactUs}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

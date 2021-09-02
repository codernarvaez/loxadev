import React from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "utils/history";
import { Article, ContactUs, Dashboard, Home, Login } from "pages";
import { PrivateRoute } from "router/PrivateRoute";
import { PublicRoute } from "router/PublicRoute";

export const AppRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" loggedIn={loggedIn} component={Home} />

        <PublicRoute
          exact
          path="/ingresar"
          loggedIn={loggedIn}
          component={Login}
        />

        <PublicRoute
          exact
          path="/articulo"
          loggedIn={loggedIn}
          component={Article}
        />

        <PublicRoute
          exact
          path="/contactanos"
          loggedIn={loggedIn}
          component={ContactUs}
        />

        <PrivateRoute
          path="/panel"
          loggedIn={!loggedIn}
          component={Dashboard}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { dashboardRoutes } from "./routes";

export const DashboardRouter = () => {
  return (
    <Switch>
      {dashboardRoutes.map(
        (route, key) =>
          route.component && (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => <route.component {...props} />}
            />
          )
      )}

      <Redirect from="/panel" to="/panel/articulos" />
    </Switch>
  );
};

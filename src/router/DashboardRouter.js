import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { dashboardRoutes } from "./routes";

export const DashboardRouter = () => {
  return (
    <Routes>
      {dashboardRoutes.map(
        (route, key) =>
          route.component && (
            <Route
              key={key}
              path={route.path}
              element={<route.component />}
            />
          )
      )}

      <Route path="/" element={<Navigate to="articulos" replace />} />
    </Routes>
  );
};

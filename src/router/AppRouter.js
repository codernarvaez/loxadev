import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AboutUs,
  Article,
  Blog,
  ContactUs,
  Dashboard,
  Home,
  Login,
  OurProducts,
  OurServices,
} from "pages";
import { PrivateRoute } from "router/PrivateRoute";
import { PublicRoute } from "router/PublicRoute";

export const AppRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/ingresar"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <Blog />
            </PublicRoute>
          }
        />

        <Route
          path="/articulo/:id"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <Article />
            </PublicRoute>
          }
        />

        <Route
          path="/contactanos"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <ContactUs />
            </PublicRoute>
          }
        />

        <Route
          path="/nosotros"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <AboutUs />
            </PublicRoute>
          }
        />

        <Route
          path="/servicios"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <OurServices />
            </PublicRoute>
          }
        />

        <Route
          path="/productos"
          element={
            <PublicRoute loggedIn={loggedIn}>
              <OurProducts />
            </PublicRoute>
          }
        />

        <Route
          path="/panel/*"
          element={
            <PrivateRoute loggedIn={loggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

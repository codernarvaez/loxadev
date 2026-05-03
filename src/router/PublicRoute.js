import { Navigate } from "react-router-dom";

export const PublicRoute = ({ loggedIn, children }) => {
  return loggedIn ? <Navigate to="/panel" replace /> : children;
};

import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  // localStorage.clear();
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated === "2" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

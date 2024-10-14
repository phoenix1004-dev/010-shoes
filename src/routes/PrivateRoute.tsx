import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  // sessionStorage.clear();
  const isAuthenticated = sessionStorage.getItem("user");
  return isAuthenticated === "2" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  // sessionStorage.clear();
  const isAuthenticated = sessionStorage.getItem("user");
  return isAuthenticated === "1" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

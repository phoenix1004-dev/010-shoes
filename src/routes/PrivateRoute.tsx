import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("user");
  console.log(isAuthenticated);
  return isAuthenticated === "1" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && roles.includes(role) ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

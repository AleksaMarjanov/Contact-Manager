import React from "react";
import { Navigate } from "react-router";
import { getLoggedUser } from "../http-utils/User-request";

const NonAuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();

  if (user) {
    return <Navigate to="/users-list" />;
  }
  return children;
};

export default NonAuthenticatedGuard;

import React from "react";
import { Navigate } from "react-router";
import { getLoggedUser } from "./../http-utils/User-request";

const AuthenticatedRoute = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to="/login" />;
  }
  /* When user logged in it will display children 
which in this case is Layout Component with all
components within layout component (users-list, cards...)
*/

  return children;
};

export default AuthenticatedRoute;

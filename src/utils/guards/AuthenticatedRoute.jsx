import React from "react";
import { Navigate } from "react-router";
import { getLoggedUser } from "./../http-utils/User-request";

const AuthenticatedRoute = (props) => {
  const user = getLoggedUser();
  console.log(props);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <props.element {...props} />;
};

export default AuthenticatedRoute;

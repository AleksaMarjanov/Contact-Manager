import "./main.scss";
import React from "react";
import UsersList from "../users/users-list/UsersList";

const Main = () => {
  return (
    <div className="main-content">
      <UsersList />
    </div>
  );
};

export default Main;

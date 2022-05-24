import "./main.scss";
import React from "react";
import UsersList from "../users/users-list/UsersList";
import User from "../users/user/User";
import { Route, Routes } from "react-router";
import UserForm from "./../users/user-form/UserForm";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-content">
      <Outlet />
    </div>
  );
};

export default Main;

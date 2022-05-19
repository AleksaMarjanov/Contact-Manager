import "./main.scss";
import React from "react";
import UsersList from "../users/users-list/UsersList";
import User from "../users/user/User";
import { Route, Routes } from "react-router";
import UserForm from "./../users/user-form/UserForm";

const Main = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/user/:id" element={<User />} />{" "}
        <Route path="/user/create" element={<UserForm />} />
        <Route path="/user/edit/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default Main;

import Layout from "./components/layout/Layout";
import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import Register from "./components/auth/register/Register";
import UserForm from "./components/users/user-form/UserForm";
import User from "./components/users/user/User";
import UsersList from "./components/users/users-list/UsersList";
import Login from "./components/auth/login/Login";
import AuthenticatedRoute from "./utils/guards/AuthenticatedRoute";

const App = () => {
  return (
    <div className="stage">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              {" "}
              <Layout />
            </AuthenticatedRoute>
          }
        >
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/create" element={<UserForm />} />
          <Route path="/user/edit/:id" element={<UserForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

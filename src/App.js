import Layout from "./components/layout/Layout";
import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import Register from "./components/auth/register/Register";
import UserForm from "./components/users/user-form/UserForm";
import User from "./components/users/user/User";
import UsersList from "./components/users/users-list/UsersList";
import UserFormEdit from "./components/users/user-form-edit/UserFormEdit";
import Login from "./components/auth/login/Login";
import AuthenticatedRoute from "./utils/guards/AuthenticatedRoute";
import NonAuthenticatedGuard from "./utils/guards/NonAuthenticatedGuard";
import TasksList from "./components/tasks/tasks-list/TasksList";
import TaskForm from "./components/tasks/task-form/TaskForm";
import TaskFormEdit from "./components/tasks/task-formEdit/TaskFormEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <NonAuthenticatedGuard>
              <Register />
            </NonAuthenticatedGuard>
          }
        />
        <Route
          path="/login"
          element={
            <NonAuthenticatedGuard>
              <Login />
            </NonAuthenticatedGuard>
          }
        />

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
          <Route path="/user/create" element={<UserFormEdit />} />
          <Route path="/user/edit/:id" element={<UserForm />} />
          {/* new user prop  */}
          {/* higher order comp */}
          <Route path="/tasks-list" element={<TasksList />} />
          <Route path="/task/create" element={<TaskForm />} />
          <Route path="/task/edit/:id" element={<TaskFormEdit />} />
          <Route path="/tasks/:id" element={<TasksList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

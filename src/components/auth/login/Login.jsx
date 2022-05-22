import React, { useState } from "react";
import "./login.scss";
// import { Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { login } from "./../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import Header from "./../../header/Header";
import Footer from "../../footer/Footer";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [newUser, SetNewUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;

    SetNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });

    setError("");
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    login(newUser)
      .then(() => {
        navigate("/users-list");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <Header />
      <h2>Login</h2>
      <div className="user-login-wrapper">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={onLoginSubmit}
        >
          {error && <span className="text-danger">{error}</span>}
          <div>
            <TextField
              required={true}
              name="email"
              value={newUser.email}
              id="outlined-required"
              label="E-Mail"
              placeholder="Enter E-mail"
              onChange={onInputChange}
            />
            <TextField
              required={true}
              id="outlined-password-input"
              name="password"
              value={newUser.password}
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={onInputChange}
            />
          </div>
          <Button type="submit" color="primary">
            Login
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Login;

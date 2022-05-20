import React, { useState } from "react";
import "./login.scss";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { login } from "./../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";

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

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    login(newUser)
      .then(() => {
        navigate("/users-list");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Form onSubmit={onRegisterSubmit}>
      {error && <span className="text-danger">{error}</span>}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="text"
          value={newUser.email}
          placeholder="Enter name"
          onChange={onInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={onInputChange}
          value={newUser.password}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;

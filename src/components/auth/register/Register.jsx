import React, { useState } from "react";
import "./register.scss";
import { registerUser } from "./../../../utils/http-utils/User-request";
import { useNavigate } from "react-router";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "./../../header/Header";
import Footer from "./../../footer/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [newUser, SetNewUser] = useState({
    isActive: false,
    name: "",
    picture: "",
    email: "",
    phone: "",
    address: "",
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
    registerUser(newUser)
      .then(() => {
        navigate("/users-list");
      })
      .catch((error) => setError(error.message));
    // registerUser(user)
  };

  return (
    <>
      <Header />
      <h1> Register </h1>
      <div className="user-form-wrapper ">
        <Form onSubmit={onRegisterSubmit} className="mt-5">
          {error && <span className="text-danger">{error}</span>}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={newUser.name}
              placeholder="Enter name"
              onChange={onInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={onInputChange}
              value={newUser.email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter picture URL"
              onChange={onInputChange}
              name="picture"
              value={newUser.picture}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone"
              onChange={onInputChange}
              name="phone"
              value={newUser.phone}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              onChange={onInputChange}
              name="address"
              value={newUser.address}
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
      </div>
      <Footer />
    </>
  );
};

export default Register;

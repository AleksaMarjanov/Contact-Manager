import React, { useState } from "react";
import "./register.scss";
import { registerUser } from "./../../../utils/http-utils/User-request";
import { useNavigate } from "react-router";
import Header from "./../../header/Header";
import Footer from "./../../footer/Footer";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {error && <span className="text-danger">{error}</span>}
          <div>
            <TextField
              required
              name="name"
              value={newUser.name}
              id="outlined-required"
              label="Name"
              defaultValue="Enter Name"
              onChange={onInputChange}
            />
            <TextField
              required
              name="email"
              value={newUser.email}
              id="outlined-required"
              label="E-Mail"
              defaultValue="Enter E-mail"
              onChange={onInputChange}
            />
            <TextField
              required
              name="picture"
              value={newUser.picture}
              id="outlined-required"
              label="Picture"
              defaultValue="Enter Picture URL"
              onChange={onInputChange}
            />
            <TextField
              required
              name="phone"
              value={newUser.phone}
              id="outlined-required"
              label="Phone"
              defaultValue="Enter Phone"
              onChange={onInputChange}
            />
            <TextField
              required
              name="address"
              value={newUser.address}
              id="outlined-required"
              label="Address"
              defaultValue="Enter Address"
              onChange={onInputChange}
            />
            <TextField
              id="outlined-password-input"
              name="password"
              value={newUser.password}
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={onInputChange}
            />
          </div>
          <Button className="button" onClick={onRegisterSubmit} color="primary">
            Submit
          </Button>
        </Box>
        {/* <Form onSubmit={onRegisterSubmit} className="mt-5">
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
        </Form> */}
      </div>
      <Footer />
    </>
  );
};

export default Register;

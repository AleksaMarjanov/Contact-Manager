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
          autoComplete="off"
          onSubmit={onRegisterSubmit}
        >
          {error && <span className="text-danger">{error}</span>}
          <div>
            <TextField
              name="name"
              value={newUser.name}
              id="outlined-required"
              label="Name"
              placeholder="Enter Name"
              onChange={onInputChange}
              required={true}
            />
            <TextField
              name="email"
              value={newUser.email}
              id="outlined-required"
              label="E-Mail"
              placeholder="Enter E-mail"
              onChange={onInputChange}
              required={true}
            />
            <TextField
              name="picture"
              value={newUser.picture}
              id="outlined-required"
              label="Picture"
              placeholder="Enter Picture URL"
              onChange={onInputChange}
            />
            <TextField
              name="phone"
              value={newUser.phone}
              id="outlined-required"
              label="Phone"
              placeholder="Enter Phone"
              onChange={onInputChange}
              required={true}
            />
            <TextField
              name="address"
              value={newUser.address}
              id="outlined-required"
              label="Address"
              placeholder="Enter Address"
              onChange={onInputChange}
              required={true}
            />
            <TextField
              name="password"
              value={newUser.password}
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={onInputChange}
              required={true}
            />
          </div>
          <Button type="submit" className="button" color="primary">
            Submit
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Register;

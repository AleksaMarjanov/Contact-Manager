import React, { useState, useEffect } from "react";
import "./userform.scss";
import { Box, Button, TextField } from "@mui/material";
import { addUser, getUserById } from "../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Checkbox from "@mui/material/Checkbox";

const UserForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    isActive: false,
    name: "",
    picture: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (params.id) {
      getUserById(params.id).then((response) => {
        setNewUser(response.data);
      });
    }
  }, [params.id]);

  const onInputChange = (e) => {
    let { name, value, checked } = e.target;

    value = e.target.value;
    if (name === "isActive") {
      value = checked;
    }

    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addUser(newUser).then(() => {
      navigate("/users-list");
    });
  };
  console.log(newUser.isActive);
  return (
    <>
      {" "}
      <div className="user-form-wrapper">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              InputLabelProps={{ required: true }}
              name="name"
              value={newUser.name}
              id="outlined-required"
              label="Name"
              placeholder="Jane Doe"
              onChange={onInputChange}
            />
            <TextField
              required
              name="email"
              value={newUser.email}
              id="outlined-required"
              label="E-Mail"
              placeholder="janedoe@hotmail.com"
              onChange={onInputChange}
            />
            <TextField
              required
              name="picture"
              value={newUser.picture}
              id="outlined-required"
              label="Picture"
              placeholder="Enter Picture URL"
              onChange={onInputChange}
            />
            <TextField
              required
              name="phone"
              value={newUser.phone}
              id="outlined-required"
              label="Phone"
              placeholder="(303)-333-4444"
              onChange={onInputChange}
            />
            <TextField
              required
              name="address"
              value={newUser.address}
              id="outlined-required"
              label="Address"
              placeholder="7939 New St.
              Huntington, NY 11743"
              onChange={onInputChange}
            />
          </div>
          <Checkbox
            name="isActive"
            value={newUser.isActive}
            onChange={onInputChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          Active
          <Button className="button" onClick={onFormSubmit} color="primary">
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
};

export default UserForm;

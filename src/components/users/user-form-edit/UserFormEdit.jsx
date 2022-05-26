import React, { useState, useEffect } from "react";
import "./userformedit.scss";
import { Box, Button, TextField } from "@mui/material";
import { addUser, getUserById } from "../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Checkbox from "@mui/material/Checkbox";

const UserFormEdit = () => {
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

  return (
    <>
      {" "}
      <div className="user-form-wrapper">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={onFormSubmit}
        >
          <TextField
            name="name"
            value={newUser.name}
            id="outlined-required"
            label="Name"
            placeholder="Jane Doe"
            onChange={onInputChange}
            required={true}
          />
          <TextField
            name="email"
            value={newUser.email}
            id="outlined-required"
            label="E-Mail"
            placeholder="janedoe@hotmail.com"
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
            placeholder="(303)-333-4444"
            onChange={onInputChange}
            required={true}
          />
          <TextField
            name="address"
            value={newUser.address}
            id="outlined-required"
            label="Address"
            placeholder="7939 New St.
              Huntington, NY 11743"
            onChange={onInputChange}
            required={true}
          />
          <Checkbox
            name="isActive"
            value={newUser.isActive}
            onChange={onInputChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          Active
          <Button className="button" type="submit" color="primary">
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
};

export default UserFormEdit;

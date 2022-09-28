import React, { useState, useEffect } from "react";
import "./userformedit.scss";
import { Box, Button, TextField, FormControlLabel, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { addUser, getUserById, getLoggedUser } from "../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Checkbox from "@mui/material/Checkbox";

const UserFormEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const loggedUser = getLoggedUser();
  const [newUser, setNewUser] = useState({
    isActive: false,
    name: "",
    picture: "",
    email: "",
    phone: "",
    address: "",
    role: {
      admin: "",
      user: ""
    }
  });

  const {isActive, name, picture, email, phone, address, role} = newUser;

  useEffect(() => {
    if (params.id) {
      getUserById(params.id).then((response) => {
        setNewUser(response.data);
      });
    }
  }, [params.id]);

  const onInputChange = (e) => {
    let value = e.target.value;
    let { name, checked } = e.target;

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

  const getAdminControl = () => {
    if(loggedUser.role === 'admin') {
      return (
        <>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="role"
              name="role"
              value={role}
              placeholder="Select Status"
              onChange={onInputChange}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </>
      )
    }
    
  }

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
            value={name}
            id="outlined-required"
            label="Name"
            placeholder="Jane Doe"
            onChange={onInputChange}
            required={true}
          />
          <TextField
            name="email"
            value={email}
            id="outlined-required"
            label="E-Mail"
            placeholder="janedoe@hotmail.com"
            onChange={onInputChange}
            required={true}
          />
          <TextField
            name="picture"
            value={picture}
            id="outlined-required"
            label="Picture"
            placeholder="Enter Picture URL"
            onChange={onInputChange}
          />
          <TextField
            name="phone"
            value={phone}
            id="outlined-required"
            label="Phone"
            placeholder="(303)-333-4444"
            onChange={onInputChange}
            required={true}
          />
          <TextField
            name="address"
            value={address}
            id="outlined-required"
            label="Address"
            placeholder="7939 New St.
              Huntington, NY 11743"
            onChange={onInputChange}
            required={true}
          />
          <FormControlLabel
          value={isActive}
          control={<Checkbox />}
          label="Active"
          labelPlacement="start"
        />
        {getAdminControl()}
          <Button className="button" type="submit" color="primary">
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
};

export default UserFormEdit;

import React, { useState, useEffect } from "react";
import "./userform.scss";
import { Form, Button } from "react-bootstrap";
import { addUser, getUserById } from "../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

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
    console.log(newUser);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addUser(newUser).then(() => {
      navigate("/users-list");
    });
  };

  return (
    <div className="user-form-wrapper">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={newUser.name}
            placeholder="Enter name"
            onChange={onInputChange}
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Active"
            name="isActive"
            checked={newUser.isActive}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;

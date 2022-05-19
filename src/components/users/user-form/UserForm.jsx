// "id": "c8f594f6-28bd-4572-9c97-79328fbd486a",
// "isActive": false,
// "picture": "https://randomuser.me/api/portraits/women/71.jpg",
// "name": "Greta Gardner",
// "email": "gretagardner@geologix.com",
// "phone": "+1 (960) 516-3052",
// "address": "248 Linden Boulevard, Blairstown, Pennsylvania, 6044"

import React, { useState } from "react";
import "./userform.scss";
import { Form, Button } from "react-bootstrap";

const UserForm = () => {
  const [newUser, setNewUser] = useState({
    isActive: false,
    name: "",
    picture: "",
    email: "",
    phone: "",
    address: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
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
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone"
            onChange={onInputChange}
            name="phone"
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
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Active" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;

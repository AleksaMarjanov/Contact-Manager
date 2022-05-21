import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { getLoggedUser } from "../../utils/http-utils/User-request";

const Header = () => {
  const user = getLoggedUser();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/users-list">Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/users-list">
              Users List
            </Link>
            <Link className="nav-link" to="/user/create">
              Create New User
            </Link>
          </Nav>
          <Nav>
            <div className="login">
              {user ? <h6>Logged in as {user.name}</h6> : null}
            </div>

            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

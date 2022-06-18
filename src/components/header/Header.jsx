import "./header.scss";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { getLoggedUser } from "../../utils/http-utils/User-request";
import * as React from "react";

const Header = () => {
  // if user is logged in it will display name of user and logout button
  const isUserLoggedIn = getLoggedUser();
  console.log('This is the logged username:',isUserLoggedIn);
  // method for logout
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  const handleMyTask = () => {
    return `/tasks/${isUserLoggedIn.id}`;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/users-list">
          <img
            className="userlogo"
            height="50px"
            src="https://pbs.twimg.com/profile_images/1510700341951561729/AIrTjju1_400x400.jpg"
            alt="user logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/users-list">
              Users List
            </Link>
            <Link className="nav-link" to="/user/create">
              Create New User
            </Link>

            <Link className="nav-link" to="/tasks-list">
              All Tasks
            </Link>
            <Link className="nav-link" to="/task/create">
              Create Task
            </Link>
          </Nav>
          {isUserLoggedIn ? (
            <>
              <Nav>
                <Link
                  className="nav-link"
                  onClick={handleMyTask}
                  to={`/tasks/${isUserLoggedIn.id}`}
                >
                  My tasks
                </Link>

                <div className="login">
                  {<h6>Logged in as {isUserLoggedIn.name}</h6>}
                </div>

                <Link
                  onClick={handleLogout}
                  className="nav-link"
                  to="/users-list"
                >
                  Logout
                </Link>
              </Nav>
            </>
          ) : (
            <Nav>
              <Link className="nav-link" to="/register">
                Register
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

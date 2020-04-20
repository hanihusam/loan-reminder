import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Hamburger, NavbarArea } from "./layouts.style";

const Navigation = ({ title }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <Nav.Item>
        <Navbar.Brand>
          <h3>Hello {user && user.name}</h3>
        </Navbar.Brand>
      </Nav.Item>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/broadcast">
        Broadcast
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
        About
      </Nav.Link>
      <Nav.Item>
        <Button variant="danger" onClick={onLogout}>
          <i className="fas fa-sign-out-alt mr-1" />
          Logout
        </Button>
      </Nav.Item>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Fragment>
  );
  return (
    <NavbarArea>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="align-items-center"
      >
        <Container>
          <Navbar.Brand>
            <h2 className="text-white">{title}</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-basic">
            <Hamburger>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-basic">
            <Nav className="ml-auto justify-content-center">
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarArea>
  );
};

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  title: "Loan Reminder",
};

export default Navigation;

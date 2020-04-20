import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Hamburger, NavbarArea } from "./layouts.style";

const Navigation = () => {
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
            <h2 className="text-white">Loan Reminder</h2>
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
                <Button variant="danger">
                  <i className="fas fa-sign-out-alt mr-1" />
                  Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarArea>
  );
};

export default Navigation;

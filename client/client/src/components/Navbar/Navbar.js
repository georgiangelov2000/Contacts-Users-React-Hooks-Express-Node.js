import React from "react";
import { Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  return (
    <>
      <Nav className="bg-dark mb-1">
        <Nav.Item>
          <LinkContainer to="/register">
            <Nav.Link className="text-white">Register</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/login">
            <Nav.Link className="text-white">Login</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbar;

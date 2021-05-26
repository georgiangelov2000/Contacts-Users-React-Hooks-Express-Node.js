import React, { useContext, useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loadUser, logout } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const onLogout = () => {
    logout();
  };

  const authRoute = (
    <>
      <Nav className="bg-dark mb-1">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link className="text-white">
              Hello {user && user.name}
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Button variant="dark" onClick={onLogout}>
            Logout
          </Button>
        </Nav.Item>
      </Nav>
    </>
  );

  const guestRoute = (
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

  return <>{isAuthenticated ? authRoute : guestRoute}</>;
};

export default Navbar;

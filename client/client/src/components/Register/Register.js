import React, { useEffect, useState, useContext } from "react";
import Alerts from "../Alerts/Alerts";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";

const Register = () => {
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { register, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Container className="text-center mt-5">
      <Col xs={6} className="m-auto">
        <h5 className="text-center">Register</h5>
        <Alerts />
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              required
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={onChange}
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              required
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={onChange}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={onChange}
              value={password}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              name="password2"
              placeholder="Password"
              required
              minLength="6"
              onChange={onChange}
              value={password2}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Row>
        <Col xs={12}>
          <>
            Already have account? Go to <Link to="/login">Login</Link>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

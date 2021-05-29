import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container,Col } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alerts/alertContext";

const Login = () => {
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const alertContext=useContext(AlertContext);

  const { login, isAuthenticated,error,clearErrors } = authContext;
  const { setAlert }=alertContext

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/contacts");
    }
    if(error==="Invalid Credentials"){
      setAlert(error,'danger');
      clearErrors();
    }
  }, [isAuthenticated,error]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields",'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Container className="text-center mt-5">
      <Col xs={6} className="m-auto">
      <h5 className="text-center">Login</h5>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            value={email}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      </Col>
    </Container>
  );
};

export default Login;

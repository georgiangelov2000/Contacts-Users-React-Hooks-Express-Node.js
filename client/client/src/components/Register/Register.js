import React,{useEffect,useState,useContext} from "react";
import {useHistory} from "react-router-dom";
import {Form,Button,Container} from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const history =useHistory();
  const authContext =useContext(AuthContext);

  const {register,isAuthenticated}=authContext;

  useEffect(()=>{
    if(isAuthenticated){
      console.log("is authenticated is true!")
    }
  },[isAuthenticated])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password,password2} =user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      console.log('Please enter all fields', 'danger');
    } else if (password !== password2) {
      console.log('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      })
    }
  }

  return (
    <Container>
    <h5 className="text-center" >Register</h5>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
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
    </Container>
  );
};

export default Register;

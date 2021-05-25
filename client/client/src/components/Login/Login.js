import React,{useContext,useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Form,Button,Container} from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";


const Login = () => {
    const authContext=useContext(AuthContext);

    const {login,isAuthenticated}=authContext;

    useEffect(() => {
        if(isAuthenticated){
            console.log("login success");
        }
    }, [isAuthenticated])

    const[user,setUser]=useState({
        email:"",
        password:""
    });

    const {email,password}=user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit=(e)=>{
        e.preventDefault();
        if(email==='' || password===''){
            console.log("error fields")
        }else {
            login({
                email,
                password
            });
        }
    };

  return (
    <Container>
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
    </Container>
  );
};

export default Login;

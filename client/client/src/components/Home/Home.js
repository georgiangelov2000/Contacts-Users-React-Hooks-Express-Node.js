import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
const Home = () => {
  return (
    <Container className="mt-5 text-center">
      <Col>
        <h2>What is Lorem Ipsum?</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Col>
      <Col className=" d-flex justify-content-around">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </Col>
    </Container>
  );
};

export default Home;

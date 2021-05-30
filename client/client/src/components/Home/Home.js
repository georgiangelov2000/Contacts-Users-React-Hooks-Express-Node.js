import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.background}>
      <div className={style.row}>
        <Col xs={6}>
          <Link className={style.link} to="/register">Register</Link>
        </Col>
        <Col xs={6}>
          <Link className={style.link} to="/login">Login</Link>
        </Col>
      </div>
    </div>
  );
};

export default Home;

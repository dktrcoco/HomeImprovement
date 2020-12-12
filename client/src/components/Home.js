import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Team from "./Team";
import "../styles/HomeStyle.css";

function Home() {
  return (
    <Container className="test">
      <Row>
        <p>test</p>
      </Row>

      <Row>
        <p>test</p>
      </Row>

      <Row>
        <p>test</p>
      </Row>

      <Row>
        <p>test</p>
      </Row>

      <Row>
        <p>supertest</p>
      </Row>

      <Row className="login">
        <Login />
      </Row>

      <Row>
        <Col>
          <Team className="team" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

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
        <p>supertest</p>
      </Row>

      <Row>Abode is designed to help you take control of your life.</Row>
      <Row>Simply sign in with your Google Account and you're ready to go!</Row>
      <Row>-Track important events like Dinner Parties, Birthdays, and Doctor's Appointments.</Row>
      <Row>-Assign tasks and chores and also set due dates.</Row>
      <Row>-Never worry about missing a bill payment again with our Bill Tracking System!</Row>
      <Row>-Need an easy location to keep a list of groceries you need? We have it right here!</Row>

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

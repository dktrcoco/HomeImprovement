import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Team from "./Team";
import "../styles/HomeStyle.css";

function Home() {
  return (
    <Container className="container1">
      <div className="home-text">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Abode is designed to help you take control of your life.
        </h1>
        <ul>
          <li>
            Track important events like Dinner Parties, Birthdays, and Doctor's
            Appointments.
          </li>
          <li>Assign tasks and chores and also set due dates.</li>
          <li>
            Never worry about missing a bill payment again with our Bill
            Tracking System!
          </li>
          <li>
            Need an easy location to keep a list of groceries you need? We have
            it right here!
          </li>
        </ul>
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Simply sign in with your Google Account and experience Abode!!
        </div>
      </div>

      <Row>
        <Col>
          <Team className="team" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

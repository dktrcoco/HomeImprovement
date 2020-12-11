import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Team from "./Team";

function Home() {
  return (
    <Container>
        <div>
            <p>supertest</p>
        </div>
      <Link>
        {/* <Login /> */}
      </Link>
      <Team />
    </Container>
  );
}

export default Home;

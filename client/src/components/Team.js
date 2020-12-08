import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import GitHubBtn from "./GitHubBtn";
import LinkedInBtn from "./LinkedInBtn";
import Teammate from "./Teammate";
import Quote from "./Quote";
import "./TeamStyle.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team() {
  // state would go here
  return (
    <Container className="teamContainer">
      <h1 className="meet">The Dream Team</h1>
      <Row>
        <Card>
          <Teammate
            src="https://ca.slack-edge.com/T015J3MGCSG-U0153GLK8F9-ab3a46e4e96b-512"
            text="insert Shonta quote or phrase here"
            hrefGH="https://github.com/SWilson9894"
            hrefLI=""
          ></Teammate>
        </Card>

        <Card>
          <Teammate
            src="https://ca.slack-edge.com/T015J3MGCSG-U0162TM0HQS-b8dbf9551fe7-512"
            text="Almost dead yesterday, maybe dead tomorrow, but alive, gloriously alive, today!"
            hrefGH="https://github.com/dktrcoco"
            hrefLI="https://www.linkedin.com/in/christopherkabana"
          ></Teammate>
        </Card>

        <Card>
          <Teammate
            src="https://ca.slack-edge.com/T015J3MGCSG-U015FREGZJP-096ff97dfbe1-512"
            text="insert Matt quote or phrase here"
            hrefGH="https://github.com/Mdudzik92"
            hrefLI="https://www.linkedin.com/in/mattdudzik/"
          ></Teammate>
        </Card>

        <Card>
          <Teammate
            src="https://ca.slack-edge.com/T015J3MGCSG-U015GU3KKAR-6a8e9deda116-512"
            text="insert Christian quote or phrase here"
            hrefGH="https://github.com/CVade"
            hrefLI=""
          ></Teammate>
        </Card>
      </Row>
    </Container>
  );
}

export default Team;

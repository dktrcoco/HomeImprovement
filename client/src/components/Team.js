import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import GitHubBtn from "./GitHubBtn";
import LinkedInBtn from "./LinkedInBtn";
import Teammate from "./Teammate";
import Quote from "./Quote";
import "./TeammateStyle.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team() {
  // state would go here
  return (
    <Container>
      <h1 className="meet">The Dream Team</h1>
      <Card>
        <Teammate
          src="https://ca.slack-edge.com/T015J3MGCSG-U0153GLK8F9-ab3a46e4e96b-512"
          text="insert Shonta quote or phrase here"
        ></Teammate>
        <Row>
          <GitHubBtn
            href="https://github.com/swilson9894"
            message="Github Profile"
            icon={faGithub}
          ></GitHubBtn>
          <LinkedInBtn href="" icon={faLinkedin}></LinkedInBtn>
        </Row>
      </Card>

      <Card>
        <Teammate
          src="https://ca.slack-edge.com/T015J3MGCSG-U0162TM0HQS-b8dbf9551fe7-512"
          text="insert Chris quote or phrase here"
        ></Teammate>
        <Row>
          <GitHubBtn
            href="https://github.com/dktrcoco"
            message="Github Profile"
          ></GitHubBtn>
          <LinkedInBtn
            href="https://www.linkedin.com/in/christopherkabana"
            message="LinkedIn Profile"
          ></LinkedInBtn>
        </Row>
      </Card>

      <Card>
        <Teammate
          src="https://ca.slack-edge.com/T015J3MGCSG-U015FREGZJP-096ff97dfbe1-512"
          text="insert Matt quote or phrase here"
        ></Teammate>
        <Row>
          <GitHubBtn
            href="https://github.com/Mdudzik92"
            message="Github Profile"
          ></GitHubBtn>
          <LinkedInBtn
            href="https://www.linkedin.com/in/mattdudzik/"
            message="LinkedIn Profile"
          ></LinkedInBtn>
        </Row>
      </Card>

      <Card>
        <Teammate
          src="https://ca.slack-edge.com/T015J3MGCSG-U015GU3KKAR-6a8e9deda116-512"
          text="insert Christian quote or phrase here"
        ></Teammate>
        <Row>
          <GitHubBtn
            href="https://github.com/CVade"
            message="Github Profile"
          ></GitHubBtn>
          <LinkedInBtn href="" message="LinkedIn Profile"></LinkedInBtn>
        </Row>
      </Card>
    </Container>
  );
}

export default Team;

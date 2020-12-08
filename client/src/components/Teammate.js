import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./TeammateStyle.css";
import Quote from "./Quote";
import ReactRoundedImage from "react-rounded-image";
import GitHubBtn from "./GitHubBtn";
import LinkedInBtn from "./LinkedInBtn";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Teammate({ src, text, hrefGH, hrefLI }) {
  // state would go here
  return (
    <Card className="card">
      <ReactRoundedImage image={src} />
      {/* <Col xs={6} md={4}>
        <img
          className="teammate"
          src={src}
          alt="centered image"
          width="200"
          height="200"
          roundedCircle
        /> */}
      <div className="middle">
        <Quote text={text}></Quote>
      </div>
      <Row>
        <GitHubBtn
          href={hrefGH}
          message="Github Profile"
          icon={faGithub}
        ></GitHubBtn>
        
        <LinkedInBtn 
        href={hrefLI} 
        icon={faLinkedin}
        ></LinkedInBtn>
      </Row>

      {/* </Col> */}
    </Card>
  );
}

export default Teammate;

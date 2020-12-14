import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Card } from "react-bootstrap";
import "../styles/TeammateStyle.css";
import Quote from "./Quote";
import ReactRoundedImage from "react-rounded-image";
import GitHubBtn from "./GitHubBtn";
import LinkedInBtn from "./LinkedInBtn";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Teammate({ src, text, hrefGH, hrefLI }) {
  return (
    <Card className="card">
      <ReactRoundedImage 
      image={src}
      roundedColor="black"
      hoverColor="yellow" 
      />
      <div className="middle">
        <Quote text={text}></Quote>
      </div>
      <Row className="button-row">
        <GitHubBtn
          href={hrefGH}
          message="Github Profile"
          icon={faGithub}
        ></GitHubBtn>

        <LinkedInBtn href={hrefLI} icon={faLinkedin}></LinkedInBtn>
      </Row>
    </Card>
  );
}

export default Teammate;

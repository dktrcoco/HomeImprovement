import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LinkedInBtnStyle.css";

function LinkedInBtn({ href }) {
  return (
    <>
      <a className="linkedin-btn" href={href} target="_blank">
        <i className="fab fa-linkedin-in">
          <FontAwesomeIcon className="test" icon={faLinkedin} />
        </i>
        <span className="linkedText"></span>
      </a>
      {/* <a className="linkedin-btn" href={href} icon={faLinkedin}>
        {message}
      </a> */}
    </>
  );
}

export default LinkedInBtn;

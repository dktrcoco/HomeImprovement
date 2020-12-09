import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/LinkedInBtnStyle.css";

function LinkedInBtn({ href }) {
  return (
    <>
      <a className="linkedin-btn" href={href} target="_blank">
        <i className="fab fa-linkedin-in fa-3x linkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="linkedInText">LinkedIn Profile</span>
        </i>
      </a>
    </>
  );
}

export default LinkedInBtn;

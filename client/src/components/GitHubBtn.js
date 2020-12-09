import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/GitHubBtnStyle.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GitHubBtn({ href }) {
  return (
    <>
      <a className="github-btn" href={href} target="_blank">
        <i className="fab fa-github fa-3x gitHub">
          <FontAwesomeIcon icon={faGithub} />
          <span className="gitHubText">GitHub Profile</span>
        </i>
      </a>
    </>
  );
}

export default GitHubBtn;

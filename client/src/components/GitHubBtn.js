import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GitHubBtnStyle.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GitHubBtn({ href }) {
  return (
    <>
      <a className="github-btn" href={href} target="_blank">
        <i className="fab fa-github">
          <FontAwesomeIcon icon={faGithub} />
        </i>
        <span className="gitText"></span>
      </a>
      {/* <a className="github-btn" href={href}>
        {message}
      </a> */}
    </>
  );
}

export default GitHubBtn;

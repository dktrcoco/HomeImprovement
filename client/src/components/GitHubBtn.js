import React from "react";
import "./GitHubBtnStyle.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function GitHubBtn({ href, message }) {
    return (

        <>
            <a className="github-btn" href={href}>{message}</a>
        </>
        // <span className="github-btn" href={href} role="button">
        //         ✗ Button
        // </span>
    );
}

export default GitHubBtn;

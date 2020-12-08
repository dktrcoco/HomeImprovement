import React from "react";
import "./LinkedinBtnStyle.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LinkedinBtn({ href, message }) {
    return (

        <>
            <a className="linkedin-btn" href={href}>{message}</a>
        </>
    );
}

export default LinkedinBtn;

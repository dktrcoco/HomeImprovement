import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function NewButton({ href, img }) {
    return (

        <>
            <a className="new-btn" href={href}><img width="98" height="112" src={img}></img></a>
        </>
    );
}

export default NewButton;

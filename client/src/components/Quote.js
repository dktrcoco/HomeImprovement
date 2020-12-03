import React from 'react';
import "./TeammateStyle.css";

function Quote({ text }) {
    return (
        <div className="middle">
            <div className="text">
                {text}
            </div>
        </div>
    )

}

export default Quote;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import "./TeammateStyle.css";
import Quote from './Quote';

function Teammate({ src, text }) {
    // state would go here
    return (
        <Card className="card">
            <img className="teammate" src={src} alt="centered image" width="200" height="200" />
            <div className="middle">
                <Quote text={text}></Quote>
                {/* <div className="text">
                    Today's accomplishments are yesterday's impossibilities.
                </div> */}

            </div>
        </Card>
    );
}

export default Teammate;
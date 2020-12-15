import React from "react";
import { Row, Container, Card } from "react-bootstrap";
import Teammate from "./Teammate";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TeamStyle.css";

function Team() {
	return (
		<Container className="teamContainer" id="aboutUs">
			<div className="meet">
				<h1 style={{ textAlign: "center" }}>The Dream Team</h1>
			</div>

			<Row>
				<Card className="cardMargin">
					<Teammate
						src="https://ca.slack-edge.com/T015J3MGCSG-U0153GLK8F9-ab3a46e4e96b-512"
						text="My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why."
						hrefGH="https://github.com/SWilson9894"
						hrefLI="https://www.linkedin.com/in/shonta-wilson-b2747a1a3"
					></Teammate>
				</Card>

				<Card className="cardMargin">
					<Teammate
						src="https://ca.slack-edge.com/T015J3MGCSG-U0162TM0HQS-b8dbf9551fe7-512"
						text="Almost dead yesterday, maybe dead tomorrow, but alive, gloriously alive, today!"
						hrefGH="https://github.com/dktrcoco"
						hrefLI="https://www.linkedin.com/in/christopherkabana"
					></Teammate>
				</Card>

				<Card className="cardMargin">
					<Teammate
						src="https://ca.slack-edge.com/T015J3MGCSG-U015FREGZJP-096ff97dfbe1-512"
						text="The ladder of success is never crowded at the top."
						hrefGH="https://github.com/Mdudzik92"
						hrefLI="https://www.linkedin.com/in/mattdudzik/"
					></Teammate>
				</Card>

				<Card className="cardMargin">
					<Teammate
						src="https://ca.slack-edge.com/T015J3MGCSG-U015GU3KKAR-6a8e9deda116-512"
						text="Give a man a program, frustrate him for a day.
            Teach a man to program, frustrate him for a lifetime."
						hrefGH="https://github.com/CVade"
						hrefLI="https://www.linkedin.com/in/christian-vadevoulis-42a890109/"
					></Teammate>
				</Card>
			</Row>
		</Container>
	);
}

export default Team;

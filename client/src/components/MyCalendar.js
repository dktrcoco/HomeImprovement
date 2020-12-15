import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import billApi from "../utils/billAPI";
import choreApi from "../utils/choreAPI";
import eventApi from "../utils/eventAPI";
import moment from "moment";
import ChoreForm from "../components/_ChoreForm";
import "../styles/CalendarStyle.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

const FAKE_DB = {
	events: [
		{
			title: "pick up food",
			start: new Date(moment("12/12/2020 4:00pm", "MM/DD/YYYY H:mma").format()),
			end: new Date(moment("12/12/2020 4:30pm", "MM/DD/YYYY H:mma").format()),
			allDay: false,
			resource: "eat",
		},
		{
			title: "Party all day",
			start: new Date(moment("12/13/2020 4:00pm", "MM/DD/YYYY H:mma").format()),
			end: new Date(moment("12/13/2020 4:30pm", "MM/DD/YYYY H:mma").format()),
			allDay: false,
			resource: "eat",
		},
	],
	bills: [
		{
			title: "Rent",
			start: new Date(moment("12/1/2020 5:00pm", "MM/DD/YYYY H:mma").format()),
			end: new Date(moment("12/1/2020 5:30pm", "MM/DD/YYYY H:mma").format()),
			allDay: true,
			resource: "Money",
		},
	],
	chores: [
		{
			title: "run the vaccum",
			start: new Date(moment("12/31/2020 4:00pm", "MM/DD/YYYY H:mma").format()),
			end: new Date(moment("12/31/2020 4:02pm", "MM/DD/YYYY H:mma").format()),
			allDay: false,
			resource: "Money",
		},
	],
	groceries: [
		{
			title: "Walmart",
			start: new Date(moment("12/31/2020 6:00am", "MM/DD/YYYY H:mma").format()),
			end: new Date(moment("12/31/2020 12:00pm", "MM/DD/YYYY H:mma").format()),
			allDay: false,
			resource: "food",
		},
	],
};

function MyCalendar({ type, events, bills, chores, getEvents }) {
	return (
		<div>
			<Calendar
				className="calendarTop"
				localizer={localizer}
				// events={this.state.events}
				// spread operator here expands the contents of the objects here
				events={[...events, ...bills, ...chores]}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
			/>
			<Row className="features" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
				<Col>
					<div className="imageColor1">
						<MyIcon src="./assets/img/events.png" link="events" />
					</div>
				</Col>

				<Col>
					<div className="imageColor2">
						<MyIcon src="./assets/img/bills.png" link="bills" />
					</div>
				</Col>

				<Col>
					<div className="imageColor3">
						<MyIcon src="./assets/img/chores.png" link="chores" />
					</div>
				</Col>

				<Col>
					<div className="imageColor4">
						<MyIcon src="./assets/img/groceries.png" link="groceries" />
					</div>
				</Col>
			</Row>
			{type === "chores" && (
				<ChoreForm refreshEvents={() => getEvents("events")} />
			)}
		</div>
	);
}

function MyIcon(props) {
	const style = {
		maxHeight: props.height ? props.height : "65px",
	};
	return (
		<Link to={props.link}>
			<img src={props.src} alt="" style={style} />
		</Link>
	);
}

// function MyIcon(props) {
// 	const style = {
// 		maxHeight: props.height ? props.height : "50px",
// 	};
// 	return <img src={props.src} alt="" style={style} onClick={props.onClick} />
// }

export default MyCalendar;

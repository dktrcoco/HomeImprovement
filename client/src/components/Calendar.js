import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import billApi from "../utils/billAPI";
import choreApi from "../utils/choreAPI";
import eventApi from "../utils/eventAPI";
import moment from "moment";
import ChoreForm from "../components/_ChoreForm";

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

class MyCalendar extends Component {
	state = {
		events: [],
		type: "",
		chores: [],
		bills: [],
	};

	componentDidMount() {
		eventApi.getEvents().then((res) => {
			const events = res.data;
			console.log(events);
			this.setState({ events }, () => console.log(this.state));
		});

		choreApi.getChores().then((res) => {
			const chores = res.data;
			console.log(chores);
			this.setState({ chores }, () => console.log(this.state));
		});

		billApi.getBills().then((res) => {
			const bills = res.data;
			console.log(bills);
			this.setState({ bills }, () => console.log(this.state));
		});
	}

	getEvents = async (type) => {
		// get DB for events based on type. i.e. events, chores, bills, etc
		this.setState({ type }, () => this.setState({ events: FAKE_DB[type] }));
	};

	render() {
		console.log(this.state.type);
		return (
			<div>
				<Calendar
					localizer={localizer}
					// events={this.state.events}
					events={[
						...this.state.events,
						...this.state.bills,
						...this.state.chores,
					]}
					startAccessor="start"
					endAccessor="end"
					style={{ height: 500 }}
				/>
				<div style={{ display: "flex" }}>
					<MyIcon
						src="./assets/img/events.png"
						onClick={() => this.getEvents("events")}
					/>
					<MyIcon
						src="./assets/img/bills.png"
						onClick={() => this.getBills("bills")}
					/>
					<MyIcon
						src="./assets/img/chores.png"
						onClick={() => this.getChores("chores")}
					/>
					<MyIcon
						src="./assets/img/groceries.png"
						onClick={() => this.getGroceries("groceries")}
					/>
				</div>
				{this.state.type === "chores" && (
					<ChoreForm refreshEvents={() => this.getEvents("events")} />
				)}
			</div>
		);
	}
}

function MyIcon(props) {
	const style = {
		maxHeight: props.height ? props.height : "50px",
	};
	return <img src={props.src} alt="" style={style} onClick={props.onClick} />;
}

export default MyCalendar;

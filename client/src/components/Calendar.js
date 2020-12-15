import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import billApi from "../utils/billAPI";
import choreApi from "../utils/choreAPI";
import eventApi from "../utils/eventAPI";
import moment from "moment";
import ChoreForm from "../components/_ChoreForm";
import "../styles/CalendarStyle.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NewCalendar from "./MyCalendar";
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
      this.setState({ events }, () => console.log(this.state));
    });
    choreApi.getChores().then((res) => {
      const chores = res.data;
      this.setState({ chores }, () => console.log(this.state));
    });

    choreApi.getChores().then((res) => {
      const chores = res.data;
      this.setState({ chores }, () => console.log(this.state));
    });

    billApi.getBills().then((res) => {
      const bills = res.data;
      this.setState({ bills }, () => console.log(this.state));
    });
  }

  getEvents = async (type) => {
    // get DB for events based on type. i.e. events, chores, bills, etc
    this.setState({ type }, () => this.setState({ events: FAKE_DB[type] }));
  };

  // trying to set up different colors for different categories
  eventStyleGetter = function (event, start, end, isSelected) {
    var backgroundColor = "#" + event.backgroundColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  render() {
    return (
      <div>
        <NewCalendar
          events={this.state.events}
          bills={this.state.bills}
          chores={this.state.chores}
          getEvents={this.getEvents}
          views={[]}
          onSelectSlot={this.slotSelected}
          onSelectEvent={this.eventSelected}
          eventPropGetter={this.eventStyleGetter}
        ></NewCalendar>

        <Row className="features" style={{ display: "flex" }}>
          <Col>
            <MyIcon src="./assets/img/events.png" link="events" />
          </Col>

          <Col>
            <MyIcon src="./assets/img/bills.png" link="bills" />
          </Col>

          <Col>
            <MyIcon src="./assets/img/chores.png" link="chores" />
          </Col>

          <Col>
            <MyIcon src="./assets/img/groceries.png" link="groceries" />
          </Col>
        </Row>
        {this.state.type === "chores" && (
          <ChoreForm refreshEvents={() => this.getEvents("events")} />
        )}
      </div>
    );
  }
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

export default MyCalendar;

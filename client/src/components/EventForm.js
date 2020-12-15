import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import EventAPI from "../utils/eventAPI";
import BillAPI from "../utils/billAPI";
import ChoreAPI from "../utils/choreAPI";
import Calendar from "../components/MyCalendar";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Carousel } from "react-bootstrap";
import "../styles/EventFormStyle.css";
import SnowfallVid1 from "../assets/snowfall_vid_1.mp4";
import SnowfallVid2 from "../assets/snowfall_vid_2.mp4";
import SnowfallVid3 from "../assets/snowfall_vid_3.mp4";

function EventForm() {
  // Setting Events component's initial state
  const [events, setEvents] = useState([]);
  const [bills, setBills] = useState([]);
  const [chores, setChores] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all events and store them with setEvents
  useEffect(() => {
    loadEvents();
    loadBills();
    loadChores();
  }, []);

  // Load all events and sets them to events
  function loadEvents() {
    EventAPI.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  // Load all bills and sets them to bills
  function loadBills() {
    BillAPI.getBills()
      .then((res) => setBills(res.data))
      .catch((err) => console.log(err));
  }

  // Load all chores and sets them to chores
  function loadChores() {
    ChoreAPI.getChores()
      .then((res) => setChores(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes an event from the database with a given id,
  // then reloads events from the db
  function deleteEvent(id) {
    EventAPI.deleteEvent(id)
      .then((res) => loadEvents())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types
  // into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, uses the EventAPI.saveEvent
  // method to save the event data
  // Then reloads events from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.event && formObject.start && formObject.end) {
      EventAPI.saveEvent({
        title: formObject.event,
        start: formObject.start,
        end: formObject.end,
        allDay: true,
        resource: "eat",
        event: formObject.event,
      })
        .then((res) => loadEvents())
        .catch((err) => console.log(err));
    } else {
      alert("Fill out all fields!");
    }
  }

  return (
    <Container className="headerSpace">
      <Row>
        <Col>
          <Carousel id="carousel" interval={20000}>
            <Carousel.Item>
              <video className="d-block w-auto" autoPlay loop muted>
                <source src={SnowfallVid1} type="video/mp4" />
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-auto" autoPlay loop muted>
                <source src={SnowfallVid2} type="video/mp4" />
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <video className="d-block w-auto" autoPlay loop muted>
                <source src={SnowfallVid3} type="video/mp4" />
              </video>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Calendar events={events} bills={bills} chores={chores}></Calendar>
      <Features />
      <Row>
        <Col id="infoBox">
          <form action="/api/events" method="post">
            <h2>Enter an Event</h2>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              name="event"
              placeholder="What event do you want to add?"
            />
            <input
              onChange={handleInputChange}
              type="datetime-local"
              className="form-control"
              name="start"
              placeholder="When does the event start?"
            />
            <input
              onChange={handleInputChange}
              type="datetime-local"
              className="form-control"
              name="end"
              placeholder="When does the event end?"
            />
            <button
              onClick={handleFormSubmit}
              className="btn btn-lg btn-outline-dark btn-block submitbtn"
              id="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col id="listBox">
          <h2>Events On My List</h2>
          {events.length ? (
            <ul>
              {events.map((event) => (
                <div key={event._id}>
                  <Link to={"/event/" + event._id}>{event.title}</Link>
                  <DeleteBtn onClick={() => deleteEvent(event._id)} />
                </div>
              ))}
            </ul>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default EventForm;

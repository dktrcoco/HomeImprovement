import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import EventAPI from "../utils/eventAPI";
import Calendar from "../components/Calendar";
import { Row, Col, Container, Card } from "react-bootstrap";

function EventForm() {
  // Setting Events component's initial state
  const [events, setEvents] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all events and store them with setEvents
  useEffect(() => {
    loadEvents();
  }, []);

  // Load all events and sets them to events
  function loadEvents() {
    EventAPI.getEvents()
      .then((res) => setEvents(res.data))
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
    console.log(formObject);
    if (formObject.event && formObject.eventDate) {
      EventAPI.saveEvent({
        event: formObject.event,
        date: formObject.eventDate,
      })
        .then((res) => loadEvents())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <form action="/api/events" method="post">
          <a href="/features"></a>
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
          type="date"
          className="form-control"
          name="eventDate"
          placeholder="When is this event taking place?"
        />
        <button
          onClick={handleFormSubmit}
          className="btn btn-lg btn-primary btn-block"
          id="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}

export default EventForm;

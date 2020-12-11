import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import BillAPI from "../utils/billAPI";
import Calendar from "../components/MyCalendar";
import Features from "../components/Features";
import { Row, Col, Container, Card } from "react-bootstrap";
import ChoreAPI from "../utils/choreAPI";
import EventAPI from "../utils/eventAPI";
import "../styles/BillFormStyle.css";

function BillForm() {
  // Setting Bills component's initial state
  const [bills, setBills] = useState([]);
  const [events, setEvents] = useState([]);
  const [chores, setChores] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all bills and store them with setBills
  useEffect(() => {
    loadBills();
    loadChores();
    loadEvents();
  }, []);

  // Load all bills and sets them to bills
  function loadBills() {
    BillAPI.getBills()
      .then((res) => setBills(res.data))
      .catch((err) => console.log(err));
  }

  function loadChores() {
    ChoreAPI.getChores()
    .then((res) => setChores(res.data))
    .catch((err) => console.log(err))
  }

  function loadEvents() {
    EventAPI.getEvents()
    .then((res) => setEvents(res.data))
    .catch((err) => console.log(err))
  }

  // Deletes a bill from the database with a given id,
  // then reloads bills from the db
  function deleteBill(id) {
    BillAPI.deleteBill(id)
      .then((res) => loadBills())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types
  // into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, uses the BillAPI.saveBill
  // method to save the bill data
  // Then reloads bills from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    if (formObject.title && formObject.value && formObject.start) {
      BillAPI.saveBill({
        title: formObject.title,
        value: formObject.value,
        start: formObject.start,
        end: formObject.start,
      })
        .then((res) => loadBills())
        .catch((err) => console.log(err));
    } else {
      alert("Fill out all fields!");
      console.log(formObject);
    }
  }

  return (
    <Container>
      <Calendar
          events={events}
          bills={bills}
          chores={chores}
        ></Calendar>
      <Features />
      <form action="/api/bills" method="post">
        <h2>Enter a Bill</h2>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="title"
          placeholder="What bill do you want to add?"
        />
        <input
          onChange={handleInputChange}
          type="value"
          className="form-control"
          name="value"
          placeholder="How much is owed?"
        />
        <input
          onChange={handleInputChange}
          type="datetime-local"
          className="form-control"
          name="start"
          placeholder="When is this bill due?"
        />
        <button
          onClick={handleFormSubmit}
          className="btn btn-lg btn-primary btn-block submitbtn"
          id="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}

export default BillForm;

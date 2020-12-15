import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import ChoreAPI from "../utils/choreAPI";
import EventAPI from "../utils/eventAPI";
import BillAPI from "../utils/billAPI";
import Features from "../components/Features";
import Calendar from "../components/MyCalendar";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Carousel } from "react-bootstrap";
import "../styles/ChoreFormStyle.css";
import SnowfallVid1 from "../assets/snowfall_vid_1.mp4";
import SnowfallVid2 from "../assets/snowfall_vid_2.mp4";
import SnowfallVid3 from "../assets/snowfall_vid_3.mp4";

function ChoreForm() {
  // Setting Chores component's initial state
  const [chores, setChores] = useState([]);
  const [bills, setBills] = useState([]);
  const [events, setEvents] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all chores and store them with setChores
  useEffect(() => {
    loadChores();
    loadBills();
    loadEvents();
  }, []);

  // Load all chores and sets them to chores
  function loadChores() {
    ChoreAPI.getChores()
      .then((res) => setChores(res.data))
      .catch((err) => console.log(err));
  }

  // Load all bills and sets them to bills
  function loadBills() {
    BillAPI.getBills()
      .then((res) => setBills(res.data))
      .catch((err) => console.log(err));
  }

  // load all events and sets them to events
  function loadEvents() {
    EventAPI.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a chore from the database with a given id,
  // then reloads chores from the db
  function deleteChore(id) {
    ChoreAPI.deleteChore(id)
      .then((res) => loadChores())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types
  // into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, uses the ChoreAPI.saveChore
  // method to save the chore data
  // Then reloads chores from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    if (formObject.title && formObject.name && formObject.start) {
      ChoreAPI.saveChore({
        title: formObject.title,
        name: formObject.name,
        start: formObject.start,
        end: formObject.start,
      })
        .then((res) => loadChores())
        .catch((err) => console.log(err));
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
          <form action="/api/chores" method="post">
            <h2>Enter a Chore</h2>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              name="title"
              placeholder="What chore do you want to add?"
            />
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              name="name"
              placeholder="Who is responsible for this chore?"
            />
            <input
              onChange={handleInputChange}
              type="datetime-local"
              className="form-control"
              name="start"
              placeholder="When does this chore need to be completed?"
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
          <h2>Chores On My List</h2>
          {chores.length ? (
            <ul>
              {chores.map((chore) => (
                <div key={chore._id}>
                  <Link to={"/chore/" + chore._id}>
                    {chore.title} to be done by {chore.name}
                  </Link>
                  <DeleteBtn onClick={() => deleteChore(chore._id)} />
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

export default ChoreForm;

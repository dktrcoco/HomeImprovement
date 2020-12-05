import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn/index';
import EventAPI from '../utils/eventAPI';
import { Link } from '../react-router-dom';
import EventForm from '../components/EventForm';
import Calendar from '../components/Calendar';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Events() {
    // Setting Events component's initial state
    const [events, setEvents] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all events and store them with setEvents
    useEffect(() => {
        loadEvents()
    }, [])

    // Load all events and sets them to events
    function loadEvents() {
        EventAPI.getEvents()
            .then(res =>
                setEvents(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes an event from the database with a given id, 
    // then reloads events from the db
    function deleteEvent(id) {
        EventAPI.deleteEvent(id)
            .then(res => loadEvents())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types
    // into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, uses the EventAPI.saveEvent
    // method to save the event data
    // Then reloads events from the database
    function handleFormSubmit(event) {
        event.preventdefault();
        if (formObject.event && formObject.date) {
            EventAPI.saveEvent({
                event: formObject.event,
                date: formObject.date
            })
                .then(res => loadEvents())
                .catch(err => console.log(err));
        }
    };

    // need to return here
    // maybe we should return the calendar component
    // or possibly the form component
    return (
        <Container>
            <Calendar />
            <EventForm />
            <div>
                onChange={handleInputChange}
            </div>
        </Container>
    );
}

export default Events;
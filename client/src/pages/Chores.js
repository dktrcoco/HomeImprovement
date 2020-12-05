import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn/index';
import ChoreAPI from '../utils/choreAPI';
import { Link } from '../react-router-dom';
import ChoreForm from '../components/ChoreForm';
import Calendar from '../components/Calendar';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Chores() {
    // Setting Chores component's initial state
    const [chores, setChores] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all chores and store them with setChores
    useEffect(() => {
        loadChores()
    }, [])

    // Load all chores and sets them to chores
    function loadChores() {
        ChoreAPI.getChores()
            .then(res =>
                setChores(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes an chore from the database with a given id, 
    // then reloads chores from the db
    function deleteChore() {
        ChoreAPI.deleteChore(id)
            .then(res => loadChores())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types
    // into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, uses the ChoreAPI.saveChore
    // method to save the chore data
    // Then reloads chores from the database
    function handleFormSubmit(event) {
        event.preventdefault();
        if (formObject.chore && formObject.owner && formObject.date) {
            ChoreAPI.saveChore({
                chore: formObject.chore,
                owner: formObject.owner,
                date: formObject.date
            })
                .then(res => loadChores())
                .catch(err => console.log(err));
        }
    };

    // need to return here
    // maybe we should return the calendar component
    return (
        <Container>
            <Calendar />
            <ChoreForm />
        </Container>
    );
}

export default Chores;
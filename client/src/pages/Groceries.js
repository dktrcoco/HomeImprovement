import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn/index';
import GroceryAPI from '../utils/groceryAPI';
import { Link } from '../react-router-dom';
import GroceryForm from '../components/GroceryForm';
import Calendar from '../components/Calendar';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Groceries() {
    // Setting Groceries component's initial state
    const [groceries, setGroceries] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all Groceries and store them with setGroceries
    useEffect(() => {
        loadGroceries()
    }, [])

    // Load all groceries and sets them to groceries
    function loadGroceries() {
        GroceryAPI.getGroceries()
            .then(res =>
                setGroceries(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a grocery item from the database with a given id, 
    // then reloads groceries from the db
    function deleteGrocery() {
        GroceryAPI.deleteGrocery(id)
            .then(res => loadGrocery())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types
    // into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, uses the GroceryAPI.saveGrocery
    // method to save the grocery data
    // Then reloads groceries from the database
    function handleFormSubmit(event) {
        event.preventdefault();
        if (formObject.item) {
            GroceryAPI.saveGrocery({
                item: formObject.item
            })
                .then(res => loadGroceries())
                .catch(err => console.log(err));
        }
    };

    // need to return here
    // maybe we should return the calendar component

    return(
        <Container>
            <Calendar />
            <GroceryForm />
        </Container>
    );
}

export default Groceries;
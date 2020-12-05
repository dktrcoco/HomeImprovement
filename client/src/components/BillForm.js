import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn/index';
import BillAPI from '../utils/billAPI';
import Calendar from '../components/Calendar';
import { Row, Col, Container, Card } from 'react-bootstrap';

function BillForm() {

    const [bills, setBills] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all Bills and store them with setBills
    useEffect(() => {
        loadBills()
    }, [])

    // Load all bills and sets them to bills
    function loadBills() {
        BillAPI.getBills()
            .then(res =>
                setBills(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a bill from the database with a given id, 
    // then reloads bills from the db
    function deleteBill(id) {
        BillAPI.deleteBill(id)
            .then(res => loadBills())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types
    // into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, uses the BillAPI.saveBill
    // method to save the bill data
    // Then reloads bills from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(event);
        if (formObject.bill && formObject.billValue && formObject.billDate) {
            BillAPI.saveBill({
                bill: formObject.bill,
                value: formObject.billValue,
                date: formObject.billDate
            })
                .then(res => loadBills())
                .catch(err => console.log(err));
        }
    };

    return (

        <form action="/api/bills" method="post">
            <h2>Enter a Bill</h2>
            <input onChange={handleInputChange} type="text" className="form-control" name="bill" placeholder="What bill do you want to add?" />
            <input onChange={handleInputChange} type="value" className="form-control" name="billValue" placeholder="How much is owed?" />
            <input onChange={handleInputChange} type="date" className="form-control" name="billDate" placeholder="When is this bill due?" />
            <button onClick={handleFormSubmit} className="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
        </form>

    );
}

export default BillForm;
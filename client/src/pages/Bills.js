import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import BillAPI from "../utils/billAPI";
import { Link } from "../react-router-dom";
import BillForm from "../components/BillForm";
import Calendar from "../components/Calendar";
import { Row, Col, Container, Card } from "react-bootstrap";

function Bills() {
  // Setting Bills component's initial state
  const [bills, setBills] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all Bills and store them with setBills
  useEffect(() => {
    loadBills();
  }, []);

  // Load all bills and sets them to bills
  function loadBills() {
    BillAPI.getBills()
      .then((res) => setBills(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a bill from the database with a given id,
  // then reloads bills from the db
  function deleteBill() {
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
    event.preventdefault();

    if (formObject.bill && formObject.value && formObject.date) {
      BillAPI.saveBill({
        bill: formObject.bill,
        value: formObject.value,
        date: formObject.date,
      })
        .then((res) => loadBills())
        .catch((err) => console.log(err));
    }
  }

  // need to return here
  // maybe we should return the calendar component

  return (
    <Container>
      <Calendar />
      <BillForm />
    </Container>
  );
}

export default Bills;

import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import GroceryAPI from "../utils/groceryAPI";
import Calendar from "../components/Calendar";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";

function GroceryForm() {
  // Setting Groceries component's initial state
  const [groceries, setGroceries] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all Groceries and store them with setGroceries
  useEffect(() => {
    loadGroceries();
  }, []);

  // Load all groceries and sets them to groceries
  function loadGroceries() {
    GroceryAPI.getGroceries()
      .then((res) => setGroceries(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a grocery item from the database with a given id,
  // then reloads groceries from the db
  function deleteGrocery(id) {
    GroceryAPI.deleteGrocery(id)
      .then((res) => loadGroceries())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types
  // into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, uses the GroceryAPI.saveGrocery
  // method to save the grocery data
  // Then reloads groceries from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    if (formObject.grocery) {
      GroceryAPI.saveGrocery({
        item: formObject.grocery,
      })
        .then((res) => loadGroceries())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <Col className="groceryRow">
        <form action="/api/groceries" method="post">
          <h2>Enter a Grocery Item</h2>
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="grocery"
            placeholder="What grocery item do you want to add?"
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
      </Col>
      <Col>
        <Row>
          <Col>
            <h1>Groceries On My List</h1>
            {groceries.length ? (
              <ul>
                {groceries.map((grocery) => (
                  <div key={grocery._id}>
                    <Link to={"/grocery/" + grocery._id}>{grocery.item}</Link>
                    <DeleteBtn onClick={() => deleteGrocery(grocery._id)} />
                  </div>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default GroceryForm;

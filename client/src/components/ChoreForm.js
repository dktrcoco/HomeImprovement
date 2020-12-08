import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn/index";
import ChoreAPI from "../utils/choreAPI";
import Calendar from "../components/Calendar";
import { Row, Col, Container, Card } from "react-bootstrap";

function ChoreForm() {
	// Setting Chores component's initial state
	const [chores, setChores] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all chores and store them with setChores
	useEffect(() => {
		loadChores();
	}, []);

	// Load all chores and sets them to chores
	function loadChores() {
		ChoreAPI.getChores()
			.then((res) => setChores(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes an chore from the database with a given id,
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
		console.log(formObject);
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
		<Container>
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

export default ChoreForm;

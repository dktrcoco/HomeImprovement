import React, { useState, useEffect } from "react";

class Form extends React.Component {
    state = {
        chore: "",
        owner: "",
        date: null
    }
    
//     const[events, setEvents] = useState([]);
//     const[formObject, setFormObject] = useState({ });

//     // Load all events and store them with setEvents
//     useEffect(() => {
//         loadEvents();
//     }, []);

// // Load all events and sets them to events
// function loadEvents() {
//     EventAPI.getEvents()
//         .then((res) => setEvents(res.data))
//         .catch((err) => console.log(err));
// }

handleChange = e => this.setState({ [e.target.name]: e.target.value })

submitForm = async (e) => {
    e.preventDefault();
    // API call to add to database
    // THEN
    // refresh the calendar
    this.props.refreshEvents();
}

render() {
    return <form action="/api/chores" method="post" onSubmit={this.submitForm}>
        <input type="text" placeholder="Enter Chore" name="chore" value={this.state.chore} onChange={this.handleChange} />
        <input type="text" placeholder="Assigned to" name="owner" value={this.state.owner} onChange={this.handleChange} />
        <input type="timedate" placeholder="due date" name="date" value={this.state.date} onChange={this.handleChange} />
        <button type="submit">Add</button>
    </form>
}
}

export default Form
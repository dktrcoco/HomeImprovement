import axios from "axios";

// need to have our equivalent to this for our stuff
// this file makes it so the UI team does not have to know
// explicitly the api routes
export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the chore with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a chore to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};

// this file should be imported into the event page in page folder

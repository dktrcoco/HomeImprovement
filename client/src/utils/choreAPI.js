import axios from "axios";

// this file makes it so the UI team does not have to know
// explicitly the api routes
export default {
  // Gets all chores
  getChores: function() {
    return axios.get("/api/chores");
  },
  // Gets the chore with the given id
  getChore: function(id) {
    return axios.get("/api/chores/" + id);
  },
  // Deletes the chore with the given id
  deleteChore: function(id) {
    return axios.delete("/api/chores/" + id);
  },
  // Saves a chore to the database
  saveChore: function(choreData) {
    return axios.post("/api/chores", choreData);
  }
};

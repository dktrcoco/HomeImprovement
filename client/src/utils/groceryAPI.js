import axios from "axios";

// this file makes it so the UI team does not have to know
// explicitly the api routes
export default {
  // Gets all groceries
  getGroceries: function () {
    return axios.get("/api/groceries");
  },
  // Gets the grocery with the given id
  getGrocery: function (id) {
    return axios.get("/api/groceries/" + id);
  },
  // Deletes the grocery with the given id
  deleteGrocery: function (id) {
    return axios.delete("/api/groceries/" + id);
  },
  // Saves a grocery to the database
  saveGrocery: function (groceryData) {
    return axios.post("/api/groceries", groceryData);
  },
};

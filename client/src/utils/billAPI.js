import axios from "axios";

// this file makes it so the UI team does not have to know
// explicitly the api routes
export default {
  // Gets all bills
  getBills: function () {
    return axios.get("/api/bills");
  },
  // Gets the bill with the given id
  getBill: function (id) {
    return axios.get("/api/bills/" + id);
  },
  // Deletes the bill with the given id
  deleteBill: function (id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a bill to the database
  saveBill: function (billData) {
    return axios.post("/api/bills", billData);
  },
};

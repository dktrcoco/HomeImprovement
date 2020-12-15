import React from "react";
import axios from "axios";

function Signup() {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" placeholder="First Name" />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" placeholder="Last Name" />
      </div>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          // value={this.state.username}
          // onChange={this.handleChange}
          placeholder="Enter Username"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">Sign in?</a>
      </p>
    </form>
  );
}

export default Signup;

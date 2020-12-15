import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";

// importing components for auth
import Login from "./components/Login";
import Logout from "./components/Logout";

// importing navbar component
import Nav from "./components/Nav";

// importing Home page
import Home from "./components/Home";

// importing the forms of what we're tracking
import EventForm from "./components/EventForm";
import ChoreForm from "./components/ChoreForm";
import BillForm from "./components/BillForm";
import GroceryForm from "./components/GroceryForm";

// importing page to display if a bad route is used
import NoMatch from "./pages/NoMatch";

// importing component for footer
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />

      <div>
        <p>If you can find this Easter Egg, you Rock!</p>
      </div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={BillForm} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/bills" component={BillForm} />
          <Route path="/chores" component={ChoreForm} />
          <Route path="/events" component={EventForm} />
          <Route path="/groceries" component={GroceryForm} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// importing components for auth
import Login from "./components/Login";
import Signup from "./components/Signup";

// importing navbar component
import Nav from "./components/Nav";

// importing the calendar component
import MyCalendar from "./components/Calendar";

// importing the forms of what we're tracking
import Features from "./components/Features";
import EventForm from "./components/EventForm";
import ChoreForm from "./components/ChoreForm";
import BillForm from "./components/BillForm";
import GroceryForm from "./components/GroceryForm";

// importing page to display if a bad route is used
import NoMatch from "./pages/NoMatch";

// importing team component
import Team from "./components/Team";

// importing component for floating footer
import Footer from "./components/Footer";
import Button from "./components/NewButton";

function App() {
  // the next 14ish lines are current attempts at incorporating
  // scrolling functionality
  const [currentPage, setCurrentPage] = useState();
  const featureRef = useRef(null);
  const teamRef = useRef(null);

  // this will fire anytime the currentPage changes
  useEffect(() => {
    if (currentPage === "features" && featureRef.current) {
      featureRef.current.scrollIntoView();
      console.log("aarhg");
    } else if (currentPage === "team" && teamRef.current) {
      teamRef.current.scrollIntoView();
      console.log("1234");
    }
  }, [currentPage]);

  return (
    <Router>
      <Nav setCurrentPage={setCurrentPage} />
      <div>
        <p>TESTING</p>
        {currentPage}
      </div>
      <div>
        <MyCalendar />
        <Features ref={featureRef} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/bills" component={BillForm} />
          <Route path="/chores" component={ChoreForm} />
          <Route path="/events" component={EventForm} />
          <Route path="/groceries" component={GroceryForm} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Team ref={teamRef} />
      <Footer />
    </Router>
  );
}

export default App;

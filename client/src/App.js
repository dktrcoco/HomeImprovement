import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Test from "./components/Test";
import Team from "./components/Team";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import UserCheck from "./components/UserCheck";
import MyCalendar from "./components/Calendar";
// import Event from "./pages/Events";
// import Bills from "./pages/Bills";
// import Chores from "./pages/Chores";
// import Groceries from "./pages/Groceries";
import EventForm from "./components/EventForm";
import ChoreForm from "./components/ChoreForm";
import BillForm from "./components/BillForm";
import GroceryForm from "./components/GroceryForm";
import Button from "./components/NewButton";

function App() {
	return (
		<Router>
			<div>
				<Button img="./public/assets/img/bills.png" />
				{/* <UserCheck /> */}
				{/* <Event /> trying to have the component go thru the page */}
				{/* <EventForm />
				<ChoreForm />
				<BillForm />
				<GroceryForm /> */}
				{/* <Switch>
					<Route path="/Bills">
						<Bills />
					</Route>

					<Route path="/Chores">
						<Chores />
					</Route>

					<Route path="/Events">
						<Events />
					</Route>

					<Route path="/Groceries">
						<Groceries />
					</Route>
				</Switch> */}
			</div>
			<div>
				<Nav />
				<MyCalendar />


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

					{/* <Route path="/chores">
						<ChoreForm />
					</Route>

					<Route path="/Events">
						<EventForm />
					</Route>

					<Route path="/Groceries">
						<GroceryForm />
					</Route> */}
				</Switch>
			</div>
			<Test />
			
			<Team />
		</Router>
	);
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Test from "./components/Test";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserCheck from "./components/UserCheck";
import MyCalendar from "./components/Calendar";

function App() {
	return (
		<Router>
			<div>
				<UserCheck />
			</div>
			<div>
				<Nav />
        
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/sign-in" component={Login} />
					<Route path="/sign-up" component={Signup} />
          
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
      <Test />
      <MyCalendar />
		</Router>
	);
}

export default App;

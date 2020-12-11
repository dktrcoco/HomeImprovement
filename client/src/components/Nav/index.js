import React, { useState, useRef } from "react";
import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Login from "../Login";
import Logout from "../Logout";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import "./style.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

// props.setCurrentPage will refer to the state of the currentPage from App.js
const Nav = (props) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const ref1 = useRef(null);
	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	const handleClick = (e) => {
		console.log(e.target.id);
		console.log("fired");
		props.setCurrentPage(e.target.id);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
			<a className="navbar-brand text-info font-weight-bolder" href="/">
				<span className="title">Abode</span>
			</a>
			<button
				className="custom-toggler navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExample09"
				aria-controls="navbarsExample09"
				aria-expanded={!isNavCollapsed ? true : false}
				aria-label="Toggle navigation"
				onClick={handleNavCollapse}
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
				id="navbarsExample09"
			>
				<div className="description">
					<p>
						Abode simiplifies your life by providing a single location to keep
						track of all of the important things in your life. Track your bills,
						important events, chores and tasks to be done, and even a list of
						groceries you need to buy! Abode instills order to a disordered
						world.
					</p>
				</div>

				<div>
					<Login />
					<Logout />
				</div>
			</div>
		</nav>
	);
};

export default Nav;

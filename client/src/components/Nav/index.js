import React, { useState, useRef } from "react";
import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import "./style.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

// props.setCurrentPage will refer to the state of the currentPage from App.js
const Nav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const ref1 = useRef(null)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleClick = (e) => {
    console.log(e.target.id);
    console.log("fired")
    props.setCurrentPage(e.target.id)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <span className="">Abode</span>
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
        <Link
          className="nav-link text-info"
          activeClass="active-link"
          to=""
          smooth={true}
          spy={true}
        >
          Log In
        </Link>

        <Link
          className="nav-link text-info"
          activeClass="active-link"
          to=""
          smooth={true}
          spy={true}
        >
          Sign Up
        </Link>
        
        <div id="features"
          className="nav-link text-info"
          activeClass="active-link"
          onClick={handleClick}
          to="#options"
          smooth={true}
          spy={true}
        >
          Features
        </div>

        <div id="team"
          className="nav-link text-info"
          activeClass="active-link"
          to="#aboutUs"
          onClick={handleClick}
          smooth={true}
          spy={true}
          // onClick function change a state value at App.js level
          // that would keep track of which page is currently rendering
          // make a useRef ref for each element you want to scroll to
        >
          About Us
        </div>
        {/* <a className="nav-link text-info" href="#">
          Test2
        </a> */}
        <a href="#" className="btn btn-sm btn-info nav-link text-white">
          Test3
        </a>
      </div>
    </nav>
  );
};

// function Nav() {
//   return (

// <div className="header">

//         <Navbar className="navbar navbar-expand-md bg-dark navbar-dark">
//             <a className="navbar-brand">Christopher George Kabana PhD</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="collapsibleNavbar">
//                 <ul className="navbar-nav">
//                     <li>
//                             <Link to="/index" className="nav-link">About
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/contact" className="nav-link">Contact
//                             </Link>
//                     </li>
//                     <li>
//                             <Link to="/portfolio" className="nav-link">Portfolio
//                             </Link>
//                     </li>
//                     <li> <a className="social-icon linked" href="https://www.linkedin.com/in/christopherkabana" target="_blank"><i
//                         className="fab fa-linkedin-in"></i><span className="linkedText">LinkedIn Profile</span></a></li>
//                     <li><a className="social-icon git" href="https://github.com/dktrcoco" target="_blank"><i
//                         className="fab fa-github"></i><span className="gitText">GitHub Profile</span></a></li>
//                     <li><a className="resume" target="_blank"><i className="fas fa-file"></i><span
//                         className="resumeText">Resume</span></a></li>
//                     <li className="nav-link">email: chris.kabana@gmail.com</li>
//                     <li className="nav-link">cell: 412.335.5008</li>
//                 </ul>
//             </div>
//         </Navbar>
//     </div>

// <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
//   <Container className="container">
//     <Link className="navbar-brand" to={"/sign-in"}></Link>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <List className="navbar-nav ml-auto">
//         <ListItem className="nav-item">
//           <Link className="nav-link" to={"/sign-in"}>
//             Login
//           </Link>
//         </ListItem>
//         <ListItem className="nav-item">
//           <Link className="nav-link" to={"/sign-up"}>
//             Sign up
//           </Link>
//         </ListItem>
//       </List>
//     </div>
//   </Container>
// </nav>
//   );
// }

export default Nav;

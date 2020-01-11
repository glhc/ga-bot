import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import StyledNavBar from './StyledNavBar';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  

  /**
   * Determins whether the user is logged in based off of the session storage.
   * @returns {boolean}
   */
  function isLoggedIn() {
    if (!sessionStorage.getItem("userId")) {
      return false;
    };

    return true;
  }

  /**
   * Removes the userID and jwt token from the session storage.
   */
  function logout() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("jwt");
  }

  useEffect(() => {
    window.addEventListener('storage', () => {
      if (!window.sessionStorage.getItem('userId')) {
        setLoggedIn(false);
      }
    })
  }, []);

  return (
    <Navbar collapseOnSelect expand="sm" className="navbar sticky-top">
      <Navbar.Brand>GA_Chat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/chatroom">Chat</Nav.Link>
          <Nav.Link href="/people">People</Nav.Link>
          <Nav.Link href={`/profile/${window.sessionStorage.getItem('userId')}`}>Me</Nav.Link>
          <Nav.Link href="/feed">Feed</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login" onClick={() => logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

      {/* <Link to="/" className="navbar-link">Home</Link>
      <Link to="/chatroom" className="navbar-link">Chat</Link>
      <Link to="/people" className="navbar-link">People</Link>
      <Link to={`/profile/${window.sessionStorage.getItem('userId')}`} className="navbar-link">My Profile</Link>
      <Link to="/feed" className="navbar-link">Feed</Link>
      
      {!loggedIn &&
        <div className="authentication-grouping col-3">
          <Link to="/login" className="pr-4">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      }
      {loggedIn &&
        <button onClick={() => logout()}>Logout</button>
      }
      {props.children} */}

    </Navbar>
  );
}

export default NavBar;

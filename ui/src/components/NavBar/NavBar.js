import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import StyledNavBar from './StyledNavBar';

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
    <StyledNavBar className="navbar container-flex navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/chatroom" className="navbar-link">Chat</Link>
      <Link to="/people" className="navbar-link">People</Link>
      <Link to={`/profile/${window.sessionStorage.getItem('userId')}`} className="navbar-link">My Profile</Link>
      <Link to="/feed" className="navbar-link">Feed</Link>
      

      <h3 className="navbar-text">GA Bot</h3>
      {!loggedIn &&
        <div className="authentication-grouping col-3">
          <Link to="/login" className="pr-4">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      }
      {loggedIn &&
        <button onClick={() => logout()}>Logout</button>
      }
      {props.children}
    </StyledNavBar >
  );
}

export default NavBar;

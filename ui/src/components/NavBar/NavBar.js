import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import StyledNavBar from './StyledNavBar';

function NavBar(props) {
  return (
    <StyledNavBar className="navbar">
      <Link to="/">Home</Link>
      <h3 className="navbar-text">GA Bot</h3>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      {props.children}
    </StyledNavBar>
  );
}

export default NavBar;

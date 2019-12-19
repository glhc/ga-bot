import React, { useState, useEffect } from "react";
import {BACKEND_URL} from "../../config";
import StyledLogin from './StyledLogin.js';

/*
 * Provides the interface for a user to login
 * @todo what endpoint does the login form need to go to? Guessing '/login'
 */
function Login(props) {
  
  /*
   * Will use the fetch API to send data away
   * (Unless we decide the <form> element will do it natively
   */
  function handleLogin(credentials) {
    fetch();
  };
  
  return (
    <StyledLogin>
      <form action={BACKEND_URL + '/login'}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </StyledLogin>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../config";
import StyledLogin from './StyledLogin.js';
import axios from 'axios';

/*
 * Provides the interface for a user to login
 * @todo what endpoint does the login form need to go to? Guessing '/login'
 */
export default function Login(props) {

  /* Create a state */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  /*
   * Logs into rails using knock-gem JWT auth.
   * Stores token in sessionStorage under key 'jwt'
   * Stores userId under key "userId"
   */
  function handleLogin(event) {

    /**
     * Gets the user id from backend by passing the current token
     */
    async function getUserId() {
      const token = sessionStorage.getItem('jwt');
      const customHeaders = { headers: { "Authorization": "Bearer " + token } }
      const response = axios.get(BACKEND_URL + '/user/whatsmyid', customHeaders)
      return response;
    };

    /**
     * Handles the error message
     */
    function handleAuthError(errorMessage) {
      setError(true);
    };

    /**
     * Stores the user id in session storage
     */
    function storeUserId(data) {
      window.sessionStorage.setItem('userId', data);
    };

    event.preventDefault();
    const credentials = {
      "auth": {
        "email": email,
        "password": password
      }
    };

    axios.post(BACKEND_URL + '/user_token', credentials)
      .then(response => handleAuthResponse(response), error => handleAuthError(error))
      .then(() => getUserId())
      .then(response => storeUserId(response.data))
      .catch(response => console.log('ahhhh', response));
  };



  /**
   * If http code is 201, store JWT token in sessionStorage.
   * If http code is 404, show error
   */
  function handleAuthResponse(response) {
    console.log('response');
    console.log(response);
    if ((response.status == 200) || (response.status == 201)) {
      sessionStorage.setItem('jwt', response.data.jwt);
    } else {
      throw new Error('An Error occured.');
    };

  };

  /** sets the state variable when an input field changes */
  function handleChange(event) {
    switch (event.target.type) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.log('input field type not recognised as username or password');
        console.log('input type:', event.target.type, 'type:', typeof event.target.type);
    }
  };

  useEffect(() => {
    let loggedIn = !!sessionStorage.getItem('userId');
    if (loggedIn) {
      setError(false);
    };
  }, []);

  return (
    <StyledLogin>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        {error ?
          <p id="error-message">An error occured. Please try again.</p>
          :
          null
        }
        <div className="form-group">
          <label>Email address</label>
          <input name="something"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </StyledLogin>
  );
}

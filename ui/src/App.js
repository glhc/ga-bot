import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "./App.css";

import StyledNavBar from './components/NavBar/NavBar.js';
import StyledLogin from './components/Login/Login.js';
import SignUp from './components/Login/Login.js';
import Home from './components/Home/Home.js';

import People from './components/People/People.js';
import Profile from './components/People/Profile.js';
import Feed from './components/People/Feed.js';

import Chatroom from './components/Chatroom2/Chatroom.js';
import StyledChatroom from './components/Chatroom/Chatroom.js';

function App() {
  return (
    <Router>
      <StyledNavBar />

      <Switch>
        <Route path='/feed'>
          <Feed />
        </Route>  
        <Route path='/chatroom'>
          <Chatroom />
        </Route>
        <Route path='/profile/:id'>
          <Profile />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/chatroom'>
          <StyledChatroom />
        </Route>
        <Route path='/profile'>
          <StyledLogin />
        </Route>
        <Route path='/login'>
          <StyledLogin />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import StyledMessageArea from './StyledMessageArea.js';
import {BACKEND_URL} from '../../config.js';

function MessageArea(props) {
  const messages = [];

  /*
   * Gets pre-existing messages for a given chatroom.
   * Updates the state to have the messages in there.
   * //TODO support pagination
   * @param {String} chatroomId - the chatroom id.
   *
   */
  function getMessages(chatroomId) {
    fetch(BACKEND_URL + `/chatroom/${chatroomId}/messages`)
      .then(response => response.json())
      .then(json => console.log(json));
  };
  
  return (
    <StyledMessageArea>
      {<span>{messages}</span>}
    </StyledMessageArea>
  );
};

export default MessageArea

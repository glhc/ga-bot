import React, {useState, useEffect} from 'react';
import StyledChatMemberList from './StyledChatMemberList';
import {BACKEND_URL} from '../../config.js';

/*
 * Renders a Vertical list of chatroom members for the current chatroom.
 * @param {String} chatroomId - The chatroom ID.
 */
function ChatMemberList(props) {
  const [chatMembers, setChatMembers] = useState([]);

  

  /*
   * Gets a list of members in the chatroom.
   * Updates the state to hold this array.
   * @param {String} chatroomId - The chatroomId
   */
  function updateChatMembers(chatroomId) {
    fetch(BACKEND_URL + '/chatroom/members')
      .then(response => response.json())
      .then(freshChatMembers => setChatMembers(chatMembers = freshChatMembers));
  };

  updateChatMembers(props.chatroomId);
  
  return (
    <StyledChatMemberList>
      <p>===BEGIN STYLED_CHAT_MEMBER_LIST===</p>
      {chatMembers}j
      <p>===END STYLED_CHAT_MEMBER_LIST===</p>
    </StyledChatMemberList>
  );
};

export default ChatMemberList;

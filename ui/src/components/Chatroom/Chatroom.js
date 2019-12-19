import React, { useState, useEffect } from 'react';
import StyledChatroom from './StyledChatroom';
import StyledChatMemberList from '../ChatMemberList/ChatMemberList.js';

function Chatroom(props) {
  return (
    <StyledChatroom>
      <p>===BEGIN STYLEDCHATROOM===</p>
      <StyledChatMemberList />
      <StyledChatroom />
      <p>===END STYLEDCHATROOM===</p>
    </StyledChatroom>
  );
};

export default Chatroom;

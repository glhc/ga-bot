import React, {useState, useEffect} from 'react';
import StyledChatMember from './StyledChatMember';

/*
 * Renders a chatMember's information (name, profile icon, online status, etc.)
 * Belongs to ChatMemberList
 */
function ChatMember(props) {
  return (
      <StyledChatMember href="{props.user.profile}">
        <div className="profile-icon"></div>
        <div className="username">{props.user.username}</div>
      </StyledChatMember>
  );
};

export default ChatMember;

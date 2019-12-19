import React, { useState, useEffect } from 'react';
import StyledBackButton from './StyledBackButton.js';

/*
 * Accepts as a prop the last page visited.
 * @param {String} props.lastPage - 
 */
function BackButton(props) {
  return (
    <StyledBackButton href={props.previousPage}>
      <i class="material-icons">
        arrow_back
      </i>
    </StyledBackButton>
  );
};

export default BackButton;


import React from 'react';

export default props => {
  if(!props.question) return null;
  
  return (
  <h1 data-testid="question">{props.question}</h1>
  );
}
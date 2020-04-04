import React from 'react';

export default ({ time }) => {
  if(!time) return null;

  return (
    <div data-testid="timer"> Time left: {time} </div>
  );
};

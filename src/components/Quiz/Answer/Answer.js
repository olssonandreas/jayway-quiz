import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default props => {

  const setAnswer = event => {
    const value = event.target.dataset.answer;
    props.setAnswer(value);
  };

  return (
    <button data-testid="answer" data-answer={props.answer} onClick={setAnswer}>
      { ReactHtmlParser(props.answer)}
    </button>
  );
};

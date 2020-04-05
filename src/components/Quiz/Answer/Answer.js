import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default ({ answer, setAnswer }) => {

  return (
    <button data-testid="answer" data-answer={answer} onClick={setAnswer}>
      { ReactHtmlParser(answer)}
    </button>
  );
};

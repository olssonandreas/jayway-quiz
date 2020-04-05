import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default props => {
  if(!props.question) return null;

  const { question: { question }} = props;

  return (
  <div data-testid="question">
    <h2>{ ReactHtmlParser(question) }</h2>
  </div>
  );
};

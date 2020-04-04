import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default props => {
  if(!props.question) return null;

  const { question: { category, question }} = props;
  
  return (
  <div data-testid="question">
    <p>Category: { ReactHtmlParser(category) }</p>
    <p>Question: { ReactHtmlParser(question) }</p>
  </div>
  );
};

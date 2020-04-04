import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';

test('renders Question component with question prop', () => {
  const question = "Some random question";
  const { queryByTestId } = render(<Question question={question} />);
  const questionElement = queryByTestId('question');

  expect(questionElement).toBeInTheDocument();
});

test('does not render question component without question prop', () => {
  const { queryByTestId } = render(<Question />);
  const questionElement = queryByTestId('question');

  expect(questionElement).toBe(null);
});

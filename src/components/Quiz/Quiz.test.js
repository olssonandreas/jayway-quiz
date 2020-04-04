import React from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz';

test('renders Quiz component', () => {
  const { queryByTestId } = render(<Quiz />);
  const questionElement = queryByTestId('quiz');

  expect(questionElement).toBeInTheDocument();
});



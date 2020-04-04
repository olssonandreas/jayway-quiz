import React from 'react';
import { render } from '@testing-library/react';
import Answer from './Answer';

test('renders Answer', () => {
  const { queryByTestId } = render(<Answer />);
  const timerElement = queryByTestId('answer');

  expect(timerElement).toBeInTheDocument();
});

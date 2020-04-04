import React from 'react';
import { render } from '@testing-library/react';
import Timer from './Timer';

test('renders Timer', () => {
  const { queryByTestId } = render(<Timer time="15" />);
  const timerElement = queryByTestId('timer');

  expect(timerElement).toBeInTheDocument();
});

test('Does not render Timer if time is null', () => {
  const { queryByTestId } = render(<Timer time={null} />);
  const timerElement = queryByTestId('timer');

  expect(timerElement).not.toBeInTheDocument();
});

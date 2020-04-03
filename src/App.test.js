import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  const { getByText } = render(<App />);
  const divElement = getByText('Hello world');
  expect(divElement).toBeInTheDocument();
});

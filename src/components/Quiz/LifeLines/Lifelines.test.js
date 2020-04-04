import React from 'react';
import { render, queryByTestId } from '@testing-library/react';
import LifeLines from './LifeLines';


test('renders Lifelines', () => {
  const { queryByTestId } = render(<LifeLines time="15" />);
  const addTime = queryByTestId('addTime');
  const removeAnswer = queryByTestId('removeAnswer');

  expect(addTime).toBeInTheDocument();
  expect(removeAnswer).toBeInTheDocument();
});

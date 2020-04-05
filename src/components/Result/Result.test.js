import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Result from './Result';


test('renders Result', () => {
  const historyMock = {
    push: jest.fn(),
    listen: jest.fn(),
    location: {
      state: {
        userAnswers: ['Answer'],
        game: [ { correct_answer: 'Answer' }]
      }
    },
  };
  const { queryByTestId } = render(<Router history={historyMock}><Result/></Router>);
  const resultElement = queryByTestId('result');

  expect(resultElement).toBeInTheDocument();
});

test('Does not render Result if no data from location', () => {
  const historyMock = {
    push: jest.fn(),
    listen: jest.fn(),
    location: {},
  };

  const { queryByTestId } = render(<Router history={historyMock}><Result/></Router>);
  const resultElement = queryByTestId('no-result');

  expect(resultElement).toBeInTheDocument();
});

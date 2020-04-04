import React from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz';

const mockedGameData = {
  results: [
    {
      correct_answer: 'Answer',
      incorrect_answers: ['Answer2', 'Answer3', 'Answer4'],
      question: 'Question 1',
    }, {
      correct_answer: 'Answer',
      incorrect_answers: ['Answer2', 'Answer3', 'Answer4'],
      question: 'Question 2',
    }]
};

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test('Quiz component renders game when activeGame is true', () => {
  const { queryByTestId } = render(<Quiz activeGame={true} game={mockedGameData} />);
  const quizElement = queryByTestId('quiz');

  expect(quizElement).toBeInTheDocument();
});

test('Quiz component renders loading bar without game data', () => {
  const { queryByTestId } = render(<Quiz game={null} />);
  const quizElement = queryByTestId('loading');

  expect(quizElement).toBeInTheDocument();
});

test('Quiz component renders Start game button when active game is false', () => {
  const { queryByTestId } = render(<Quiz activeGame={false} game={mockedGameData} />);
  const quizElement = queryByTestId('startGame');

  expect(quizElement).toBeInTheDocument();
});

import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

import SummaryAnswer from './SummaryAnswer';
import SummaryTime from './SummaryTime';

import styles from './Result.module.scss';

export default () => {
  const history = useHistory();
  const location = useLocation();
  if(!location.state) return <div data-testid="no-result">No quiz game result</div>

  const playAgain = () => {
    history.push('/');
  };

  const { state: { userAnswers, game }} = location;

  return (
    <div data-testid="result">
      <h2>Well done! Here are your results...</h2>
      <SummaryAnswer answers={userAnswers} game={game} />
      <SummaryTime answers={userAnswers} game={game} />
      <button className={styles.playAgain} onClick={playAgain}>Play again?</button>
    </div>
  );
};

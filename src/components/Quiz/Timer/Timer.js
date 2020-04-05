import React from 'react';
import styles from '../Quiz.module.scss';

export default ({ time }) => {
  if(time == null) return null;

  return (
    <div className={styles.time} data-testid="timer"> Time left: {16 - time} </div>
  );
};

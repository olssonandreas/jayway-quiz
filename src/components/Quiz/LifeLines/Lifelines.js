import React, { useState } from 'react';

import styles from '../Quiz.module.scss';

export default props => {
  const [usedAddTime, setUsedAddTime] = useState(false);
  const [usedRemoveAnswer, setUsedRemoveAnswer] = useState(false);

  const addTime = () => {
    setUsedAddTime(true);
    props.addTime();
  };

  const removeAnswer = () => {
    setUsedRemoveAnswer(true);
    props.removeAnswers();
  };

  return (
      <div className={styles.lifeLineRow}>
        { !usedAddTime && <div className={styles.addTime} data-testid="addTime" onClick={addTime}>10+ seconds</div> }
        { !usedRemoveAnswer && <div className={styles.removeAnswer} data-testid="removeAnswer" onClick={removeAnswer}>50/50</div> }
      </div>
    );
};

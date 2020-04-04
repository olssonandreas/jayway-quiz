import React, { Fragment, useState } from 'react';

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
    <Fragment>
      <div data-testid="addTime" onClick={!usedAddTime ? addTime : null}>10+ seconds</div>
      <div data-testid="removeAnswer" onClick={!usedRemoveAnswer ? removeAnswer : null}>50/50</div>
    </Fragment>
  );
};

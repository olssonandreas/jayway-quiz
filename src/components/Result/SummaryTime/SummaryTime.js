import React, { useMemo } from 'react';
import { averageValue, minValue, maxValue } from 'utils'
export default ({ answers }) => {
  const slowestQuestions = useMemo(() => {
    const time = answers.map(m => m.time);

    return maxValue(time);
  }, [answers]);

  const fastestQuestions = useMemo(() => {
    const time = answers.map(m => m.time);

    return minValue(time);
  }, [answers]);

  const averAgeTime = useMemo(() => {
    const time = answers.map(m => m.time);

    return averageValue(time);
  }, [answers]);


  return (
    <div data-testid="time">
      <h2>Fastest answer time: {fastestQuestions === 0 ? 'less than one second!' : `${fastestQuestions}s` }</h2>
      <h2>Slowest answer time: {slowestQuestions === 0 ? 'less than one second' : `${slowestQuestions}s` }</h2>
      <h2>Average answer time: {averAgeTime === 0 ? 'less than one second!' : `${averAgeTime}s` }</h2>
    </div>
  );
};

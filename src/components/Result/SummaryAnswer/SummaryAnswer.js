import React, { useMemo, Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';

import styles from './SummaryAnswer.module.scss';
export default ({ answers, game }) => {

  const memoCalculateAnswer = useMemo(() => {
    const correct = [];
    const unanswered = []
    const incorrect = [];
    const correctAnswers = game.map(m => m.correct_answer);

    answers.forEach((f, index) => {
      if(f.answer === correctAnswers[index]) return correct.push(index);
      if(f.answer === '') return unanswered.push(index)

      return incorrect.push(index);
    });

    return { correct, unanswered, incorrect };
  }, [game, answers]);

  return (
  <div>
    { memoCalculateAnswer.correct.length ?
    <Fragment>
      <div data-testid="correct">
        <h2>{memoCalculateAnswer.correct.length} correct answers</h2>
        { memoCalculateAnswer.correct.map((m, index) =>
        <div key={index}>
          <p>{ ReactHtmlParser(game[m].question) }</p>
        </div>)}
      </div>
    </Fragment> : null
    }


    { memoCalculateAnswer.unanswered.length ?
    <Fragment>
      <div className={styles.divider}></div>
      <div data-testid="unanswered">
      <h2>{memoCalculateAnswer.unanswered.length} unanswered </h2>
      { memoCalculateAnswer.unanswered.map((m, index) =>
        <div key={index}>
          <p>{ ReactHtmlParser(game[m].question) }</p>
          <i>Correct answer: { ReactHtmlParser(game[m].correct_answer) } </i>
        </div>
      )}
      </div>
    </Fragment> : null
    }

    { memoCalculateAnswer.incorrect.length ?
    <Fragment>
    <div className={styles.divider}></div>
      <div data-testid="incorrect">
        <h2>{memoCalculateAnswer.incorrect.length} incorrect answers</h2>
        { memoCalculateAnswer.incorrect.map((m, index) =>
          <div key={index}>
            <p>{ ReactHtmlParser(game[m].question) }</p>
            <i>Correct answer: { ReactHtmlParser(game[m].correct_answer) } </i>
          </div>
        )}
      </div>
    </Fragment> : null
    }
  </div>
 );
};

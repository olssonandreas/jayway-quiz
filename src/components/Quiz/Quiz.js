import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from "react-router-dom";

import Question from './Question';
import Timer from './Timer';
import Answer from './Answer';
import LifeLines from './LifeLines';
import { shuffle } from 'utils';

import styles from './Quiz.module.scss';

export default props => {
  const QUESTION_AMOUNT = props && props.game && props.game.results.length;
  const history = useHistory();

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeGame, setActiveGame] = useState(props.activeGame);
  const [gameAnswers, setGameAnswers] = useState([]);
  const [time, setTime] = useState(15);
  const [timeLifeLineActive, setTimeLifeLineActive] = useState(false);
  const [userAnswers, setAnswers] = useState([]);

  // concatenate and shuffle memoized array so that the correct answer places on different index
  // we use memoize here since otherwise each re-render would give us a different shuffle and also us save some computing power
  const memoGameAnswers = useMemo(() => {
    if(!props.game) return [];
    const { game: { results } } = props;

    return shuffle([
      ...results[activeQuestion].incorrect_answers,
      results[activeQuestion].correct_answer
    ]);
   }, [props, activeQuestion]);

   useEffect(() => {
     if(memoGameAnswers.length)
     setGameAnswers(memoGameAnswers);
   }, [memoGameAnswers]);

  // start side effect when game is active with timer, when time is out add empty response.
  // if there are no more questions, route to result page.
  useEffect(() => {
    if(activeGame) {
      const interval = setInterval(() => {
        setTime(seconds => seconds - 1);
        if(time === 1) {
          const newUserAnswer = [...userAnswers];
          newUserAnswer.push({
            answer: '',
            time: timeLifeLineActive ? 25 - time : 15 - time
          });

          setTimeLifeLineActive(false);
          setAnswers(newUserAnswer);

          if(activeQuestion === QUESTION_AMOUNT -1) {
            history.push('/result', { userAnswers, game: props.game.results });
          } else {
            setActiveQuestion(activeQuestion + 1);
            setTime(15);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeGame, time, activeQuestion, userAnswers, QUESTION_AMOUNT, history, props, timeLifeLineActive]);

  const addTime = () => {
    setTimeLifeLineActive(true);
    setTime(time + 10);
  };

  const removeAnswers = () => {
    const { game: { results } } = props;
    const correctAnswer = results[activeQuestion].correct_answer;
    const randomAnswer = results[activeQuestion].incorrect_answers[Math.floor(Math.random() * 3)];

    const half = shuffle([correctAnswer, randomAnswer])
    setGameAnswers(half);
  };

  const setAnswer = event => {
    const answer = event.target.dataset.answer
    userAnswers.push({
      answer,
      time: timeLifeLineActive ? 25 - time :  15 - time });

      setTimeLifeLineActive(false);
    // if its the last question, route to results page and send needed data
    if(activeQuestion === QUESTION_AMOUNT -1) {
      history.push('/result', { userAnswers, game: props.game.results });
    } else {
      setActiveQuestion(activeQuestion + 1);
      setTime(15);
    }
  };

  const startGame = () => {
    setActiveGame(true);
  };

  if(!props.game) return (<div className={styles.loading} data-testid="loading">Loading game...</div>);

  if(!activeGame) {
    return (
    <button className={styles.start} data-testid="startGame" onClick={startGame}>Start game</button>
    );
  }

  return (
  <div className={styles.quiz} data-testid="quiz">
    <div className={styles.question}>
      <Question question={props.game.results[activeQuestion]} />
      <div className={styles.row}>
        { gameAnswers.map((m, index) => <Answer key={index} answer={m} setAnswer={setAnswer}/> )}
      </div>
    </div>
    <Timer time={time} />
    <LifeLines addTime={addTime} removeAnswers={removeAnswers}/>
  </div>
  );
};

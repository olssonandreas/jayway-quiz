import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import Question from './Question';
import Timer from './Timer';
import Answer from './Answer';
import LifeLines from './LifeLines';
import shuffle from 'utils/shuffle';

export default props => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [activeGame, setActiveGame] = useState(props.activeGame);
  const [userAnswers, setAnswers] = useState([]);
  const [time, setTime] = useState(15);
  const [gameAnswers, setGameAnswers] = useState([]);
  const history = useHistory();
  const QUESTION_AMOUNT = props && props.game && props.game.results.length;

   // concatenate and shuffle memoized array so that the correct answer places on different index
   // we use memoize here since otherwise each re-render would give us a different shuffle and save some computing
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
          newUserAnswer.push({ answer: '', time});
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
  }, [activeGame, time, activeQuestion, userAnswers, QUESTION_AMOUNT, history, props]);

  const addTime = () => {
    setTime(time + 10);
  };

  const removeAnswers = () => {
    const { game: { results } } = props;
    const correctAnswer = results[activeQuestion].correct_answer;
    const randomAnswer = results[activeQuestion].incorrect_answers[Math.floor(Math.random() * 3)];

    const half = shuffle([correctAnswer, randomAnswer])
    setGameAnswers(half);
  };

  const setAnswer = answer => {
    userAnswers.push({ answer, time });

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

  if(!props.game) return (<div data-testid="loading">Loading</div>);

  if(!activeGame) return (<button data-testid="startGame" onClick={startGame}>Start game</button>);

  return (
  <div data-testid="quiz">
    <Question question={props.game.results[activeQuestion]} />
    <Timer time={time} />
    { gameAnswers.map((m, index) => <Answer key={index} answer={m} setAnswer={setAnswer}/> )}
    <LifeLines addTime={addTime} removeAnswers={removeAnswers}/>
    <div> {} </div>
  </div>
  );
};

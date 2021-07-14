/** @format */

import React, { useContext } from "react";
import { QuizContext } from "../quizContext/quiz";
import QuizAnswer from "./QuizAnswer";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currQuestion = quizState.questions[quizState.currQuestionIndex];

  return (
    <div>
      <div className='question'>{currQuestion.question}</div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <QuizAnswer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;

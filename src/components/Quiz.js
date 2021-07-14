/** @format */

import React, { useContext } from "react";
import QuizQuestion from "./QuizQuestion";
import { QuizContext } from "../quizContext/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congrats'>CONGRATS!</div>
          <div className='results-info'>
            <div>You have finished this quiz. Let's see how you did.</div>
            <div>
              You answered {quizState.correctAnswersCount} out of{" "}
              {quizState.questions.length} questions correctly.
            </div>
          </div>

          <div
            className='next-btn'
            onClick={() => dispatch({ type: "RESTART" })}>
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className='score'>
            Question {quizState.currQuestionIndex + 1} /{" "}
            {quizState.questions.length}
          </div>
          <QuizQuestion />
          {quizState.currentAnswer && (
            <div
              className='next-btn'
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;

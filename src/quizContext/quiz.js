/** @format */

import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  questions,
  currQuestionIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currQuestionIndex === state.questions.length - 1;
      const currQuestionIndex = showResults
        ? state.currQuestionIndex
        : state.currQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        answers,
        currQuestionIndex,
        showResults,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

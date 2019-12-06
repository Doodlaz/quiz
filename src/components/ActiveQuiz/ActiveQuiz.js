import React from 'react'
import { ActiveQuizBlock } from './styles';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  const { question, answers, onAnswerClick, quizLength, answerNumber, state } = props;

  return (
    <ActiveQuizBlock>
      <p className="question">
        <span>
          <strong>{ answerNumber }. </strong>
          { question }
        </span>
        <small>{ answerNumber } из { quizLength }</small>
      </p>

      <AnswersList
        state={state}
        answers={ answers }
        onAnswerClick={onAnswerClick}
      />

    </ActiveQuizBlock>
  )

}
export default ActiveQuiz
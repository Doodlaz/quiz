import React from 'react'
import { List } from './styles';
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  const {answers, onAnswerClick, state } = props;
  return (

    <List>
      { answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={ onAnswerClick }
            state={state ? state[answer.id] : null}
          />
          )
      }) }
    </List>
  )
}
export default AnswersList
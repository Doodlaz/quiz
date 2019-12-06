import React    from 'react'
import { AnswerLi } from './styles';

const AnswerItem = props => {
  const { answer, onAnswerClick, state } = props;
  if (state) {

  }
  return (
    <AnswerLi className={state}
      onClick={() => onAnswerClick(answer.id)}
    >{ answer.text }
    </AnswerLi>
  )
}
export default AnswerItem
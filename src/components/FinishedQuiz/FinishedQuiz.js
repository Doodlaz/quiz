import React from 'react'

import { FinishedQuizBlock } from './styles';
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
  const { state, results, quiz, onRetry } = props;

  const successCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === 'success') {
      total++
    }

    return total
  },0);

  console.log(successCount);

  return (
    <FinishedQuizBlock>
      <ul>

        { quiz.map((item, index) => {

          return (
            <li key={index}>
              <strong>{ index + 1 }. </strong>
              { item.question }
              <i className={"fa " + (results[item.id] === 'error' ? 'fa-times error' : 'fa-check success')} />
            </li>
          )

        }) }

      </ul>

      <p>Сorrect { successCount } from { quiz.length }</p>

      <div>
        <Button onClick={onRetry} type="primary">Repeat</Button>
        <Button type="success">Move to quiz list</Button>
      </div>
    </FinishedQuizBlock>
  )
}
export default FinishedQuiz
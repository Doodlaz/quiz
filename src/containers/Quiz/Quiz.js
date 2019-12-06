import React, { Component } from 'react'

import { QuizBlock } from './styles';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

  state = {
    results: {}, // { [id]: success error }
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { id: 1, text: 'Черный' },
          { id: 2, text: 'Синий' },
          { id: 3, text: 'Крассный' },
          { id: 4, text: 'Зеленый' },
        ]
      },{
        question: 'В каком году основли Питер?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { id: 1, text: '1700' },
          { id: 2, text: '1702' },
          { id: 3, text: '1703' },
          { id: 4, text: '1803' },
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {

    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if(this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;


    if (question.rightAnswerId === answerId) {

      if(!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000);


    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results: results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <QuizBlock>
        <div className="wrap">
          <h1>Ответьте на все вопросы</h1>

          {
            this.state.isFinished
            ? <FinishedQuiz
                results={ this.state.results }
                quiz={ this.state.quiz }
                state={ this.state.answerState }
              />
            :  <ActiveQuiz
                question={ this.state.quiz[this.state.activeQuestion].question }
                answers={ this.state.quiz[this.state.activeQuestion].answers }
                onAnswerClick={ this.onAnswerClickHandler }
                quizLength={ this.state.quiz.length }
                answerNumber={ this.state.activeQuestion + 1 }
                state={ this.state.answerState }
              />
          }

        </div>
      </QuizBlock>
    )
  }
}
export default Quiz
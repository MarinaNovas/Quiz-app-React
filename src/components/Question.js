import React from "react";
import PropTypes from 'prop-types';
import shuffle from 'lodash.shuffle'

function Question({question, hendleQuestionAnswer}){
  const answers = shuffle([...question.incorrect_answers,question.correct_answer]);

  return(
    <div className='question'>
      <h3 dangerouslySetInnerHTML={{__html:question.question}}/>
      <div>
      {
        answers.map((answer)=>(
          <button key={answer} onClick={hendleQuestionAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}}/>
        ))
      }
      </div>
    </div>
  )
}

Question.propTypes={
  question:PropTypes.array.isRequired,
  answerHendler:PropTypes.func.isRequired
}

export default Question;
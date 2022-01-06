import React from "react";

function ResultModal({ isCorrect, getQuestion, question}) {
  return (
    <div className='result-modal'>
      <div className="result-form">
        {isCorrect &&
          <div className="result-won">
            <img src="/images/smile-correct.png" alt="" />
            <h1>You won!</h1>
          </div>
        }
        {!isCorrect &&
          <div className="result-lost">
            <img src="/images/smile-wrong.png" alt="" />
            <h3 dangerouslySetInnerHTML={{__html:`correct answer:<i>${question.correct_answer}</i>`}}/>
            <h1>You lost!</h1>
          </div>
        }
        <button className='pink-button' onClick={getQuestion}>Go to the next question</button>
      </div>
    </div>
  )
}

export default ResultModal;
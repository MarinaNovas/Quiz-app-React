import React from 'react';
import {useState } from 'react';
import useTrivia from './components/useTrivia';
import CategorySelector from './components/CategorySelector';
import ScoreBoard from './components/ScoreBoard';
import Question from './components/Question';
import ResultModal from './components/ResutModal';
import './App.css';


function App() {

  const {question, selectedCategory, setSelectedCategory, getQuestion}=useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);
  

  const hendleQuestionAnswer = (answer) => () => {
    const isCorrectAnswer =  answer===question.correct_answer;
    setIsCorrect(isCorrectAnswer);
  }

  const hendleNextQuestion = ()=>{
    setIsCorrect(null);
    getQuestion();
  }

  const changeCategory = () => (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <React.Fragment>
      {isCorrect!==null && <ResultModal isCorrect={isCorrect} getQuestion={hendleNextQuestion} question={question}/>}
      <div className="app">
        <div class="question-header">
          <CategorySelector category={selectedCategory} changeCategory={changeCategory} />
          <ScoreBoard isCorrect={isCorrect}/>
        </div>
        <div class="question-main">
          {question && <Question question={question} hendleQuestionAnswer={hendleQuestionAnswer} />}
        </div>
        <div class="question-footer">
          <button className='pink-button' onClick={hendleNextQuestion}>Go to next question</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

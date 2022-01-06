import React from "react";
import {useState, useEffect} from 'react';

function ScoreBoard({isCorrect}){
  const [wrongScore, setWrongScore]=useState(0);
  const [correctScore, setCorrectScore]=useState(0);

  useEffect(()=>{
    if(isCorrect===null) return;
    isCorrect?setCorrectScore((score)=>score+1):setWrongScore((score)=>score+1);
  },[isCorrect]);
  return (
    <div className="score-board">
      <div className="score-board__item">
        <span className='score'>{wrongScore}</span>
        <span className='score-board__title wrong'>wrong</span>
      </div>
      <div className="score-board__item">
        <span className='score'>{correctScore}</span>
        <span className='score-board__title correct'>correct</span>
      </div>
    </div>
  );
}

export default   ScoreBoard;
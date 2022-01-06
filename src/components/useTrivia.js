
import { useState, useEffect, useCallback } from "react";

export default function useTrivia() {
   const [question, setQuestion] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState('any');
   
   const  getQuestion = useCallback(()=>{
 
     let url = `https://opentdb.com/api.php?amount=1&type=multiple`;
     if (selectedCategory !== 'any') url += `&category=${selectedCategory}`;
 
     fetch(url)
       .then((response)=>response.json())
       .then((data)=>setQuestion(data.results[0]));
     
   },[selectedCategory]);
 
   useEffect(() => {
     getQuestion();
   }, [getQuestion, selectedCategory]);
   
   return {question, selectedCategory, setSelectedCategory,getQuestion}
}
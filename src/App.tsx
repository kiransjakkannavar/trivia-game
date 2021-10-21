import React, {useState, useEffect} from 'react';
import QuestionCard from './components/QuestionCard';
import {randomQuestionService} from './services';

const App = () => {
  const [question, setQuestion] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState(''); 
  
  useEffect(() => {
   startQuiz();
  }, [])

  const startQuiz = async() => {
    randomQuestionService.getRandomQuestions(onSuccess,onFailure)
  }

  const checkAnswer = () => {

  }

  const onSuccess = (response:any) => {
    setQuestion(response?.data?.question);
    setAnswer(response?.data?.answer)
  }

  const onFailure = (error:any) => {
    alert(`${error?.message}`)
  }

  const submitAnswer = () => {

  }

  return (
    <div className="App">
      <h1>Trivia Quiz</h1>
      <button className="start" onClick={startQuiz}>Start</button>
      <p>Loading Question...</p>
      <QuestionCard
        questionNumber={questionNumber + 1}
        question={question}
      />
      <input type="text" />
      <button className="submit" onClick={submitAnswer}>Submit</button>
    </div>
  )
}

export default App;

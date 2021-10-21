import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
import { randomQuestionService } from "./services";

// styles
import { GlobalStyle, Wrapper } from "./App.styles";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  // fetches the questions from the server
  const startQuiz = async () => {
    setLoading(true);
    randomQuestionService.getRandomQuestions(onSuccess, onFailure);
    setUserAnswer("");
  };

  const isValidAnswer = () => {
    if (!userAnswer) {
      return false;
    } else if (userAnswer && userAnswer?.trim()?.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  // validates user entered answer with stored answer
  const validateUserAnswer = () => {
    if (userAnswer?.toLowerCase() === answer?.toLowerCase()) {
      alert(`Hurray!!!, You've have answered it Correct !
      Correct Answer -- ${answer}
      `);
    } else {
      alert(`Oops!!!,You've have answered it Wrong !
      Correct Answer -- ${answer}
      Your Answer -- ${userAnswer}
      `);
    }
  };

  // success callback
  const onSuccess = (response: any) => {
    setLoading(false);
    setQuestionNumber(questionNumber + 1);
    setQuestion(response?.[0]?.question);
    setAnswer(response?.[0]?.answer);
  };

  // failure callback
  const onFailure = (error: any) => {
    setLoading(false);
    alert(`${error?.message}`);
  };

  // invoked on tap of submit
  const submitAnswer = () => {
    if (isValidAnswer()) {
      validateUserAnswer();
    } else {
      alert("Please enter the answer");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia Quiz</h1>
        {!question && !loading ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {loading ? <p>Loading Question...</p> : null}
        {question && answer ? (
          <>
            <QuestionCard questionNumber={questionNumber} question={question} />

            <input
              type="text"
              className="input"
              placeholder="Your Answer"
              value={userAnswer}
              onChange={(event) => setUserAnswer(event?.target?.value)}
            />
            <button className="submit" onClick={submitAnswer}>
              Submit
            </button>

            <button className="next" onClick={startQuiz}>
              Next Question
            </button>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;

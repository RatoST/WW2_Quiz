import React, { useState } from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import questions from './components/questions';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');

  const question = questions[currentQuestion];

  function handleClick(e) {
    setCurrentAnswer(e.target.value);
    setError('');
  }

  function renderError() {
    if (!error) {
      return null;
    }
    return <div className="error">{error}</div>;
  }

  function renderResultMark(questionRes, answer) {
    if (questionRes.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Failed</span>;
  }

  const renderResultData = () => answers.map((answer) => {
    const questionSearch = questions.find(
      (questionLoc) => questionLoc.id === answer.questionId,
    );
    return (
      <div key={questionSearch.id}>
        {questionSearch.question}
        {' '}
-
        {' '}
        {renderResultMark(questionSearch, answer)}
      </div>
    );
  });

  function restart() {
    setAnswers([]);
    setCurrentAnswer('');
    setCurrentQuestion(0);
    setShowResults(false);
  }

  function next() {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      setError('Please select one of the answers');
      return;
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResults(true);
  }

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultData()}</ul>
        <button type="button" className="btn btn-primary" onClick={restart}>
                Restart
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <Progress total={questions.length} current={currentQuestion + 1} />
      <Question question={question.question} />
      {renderError()}
      <Answers
        question={question}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
      <button type="button" className="btn btn-primary" onClick={next}>
                Next
      </button>
    </div>
  );
}
export default App;

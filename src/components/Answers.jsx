import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

function Answers({
  question, handleClick, currentAnswer,
}) {
  return (
    <>
      <Answer
        letter="a"
        answer={question.answer_a}
        handleClick={handleClick}
        selected={currentAnswer === 'a'}
      />
      <Answer
        letter="b"
        answer={question.answer_b}
        handleClick={handleClick}
        selected={currentAnswer === 'b'}
      />
      <Answer
        letter="c"
        answer={question.answer_c}
        handleClick={handleClick}
        selected={currentAnswer === 'c'}
      />
    </>
  );
}

Answers.propTypes = {
  question: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  currentAnswer: PropTypes.string.isRequired,
};

export default Answers;

import React from 'react';
import PropTypes from 'prop-types';

function Answer({
  selected, letter, handleClick, answer,
}) {
  const classes = ['answer'];

  if (selected) {
    classes.push('selected');
  }

  return (
    <button
      type="button"
      value={letter}
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <span className="letter">
        {letter}
        {' '}
      </span>
      {answer}
    </button>
  );
}

Answer.propTypes = {
  selected: PropTypes.string,
  letter: PropTypes.string,
  handleClick: PropTypes.func,
  answer: PropTypes.string,

};

export default Answer;

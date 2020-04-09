import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return (
    <h1>{question}</h1>
  );
}

Question.propTypes = {
  question: PropTypes.string,
};

export default Question;

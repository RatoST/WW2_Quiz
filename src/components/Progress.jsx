import React from 'react';
import PropTypes from 'prop-types';

function Progress({ current, total }) {
  return (
    <h2>
Question
      {' '}
      {current}
      {' '}
of
      {' '}
      {total}
    </h2>
  );
}

Progress.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};

export default Progress;

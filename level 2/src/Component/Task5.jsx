import React from 'react';
import PropTypes from 'prop-types';

const Task5 = ({ name="Ken", age=30, city="Chennai" }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

Task5.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Task5;
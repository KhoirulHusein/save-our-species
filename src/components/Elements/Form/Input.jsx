import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Input({ inputId, inputName }) {
  return (
    <div>
      <label htmlFor={`${inputId}`} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">{inputName}</label>
      <input type="text" id={`${inputId}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  );
}

Input.propTypes = {
  inputId: PropTypes.string,
  inputName: PropTypes.string,
};

Input.defaultProps = {
  inputName: 'input',
  inputId: 'input',
};

export default Input;

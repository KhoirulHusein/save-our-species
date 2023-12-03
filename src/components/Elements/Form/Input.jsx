import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Input = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      type,
      children,
      inputId,
      labelName,
      isLabel,
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        {isLabel && (
        <label htmlFor={`${inputId}`} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">{labelName}</label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputId: PropTypes.string,
  labelName: PropTypes.string,
  isLabel: PropTypes.bool,
};

Input.defaultProps = {
  wrapClassName: 'input',
  className: 'input',
  inputId: 'id',
  labelName: 'label',
  name: 'name',
  placeholder: 'input',
  type: 'text',
  isLabel: true,
};

export { Input };

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
      onChange,
      inputId,
      isLabel,
      labelName,
      wrapClassName,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e);
    };

    return (
      <>
        {isLabel && (
          <label htmlFor={`${inputId}`} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">{labelName}</label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={className}
          type={type}
          name={name}
          onChange={handleChange}
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
};

Input.defaultProps = {
  wrapClassName: 'input',
  className: 'input',
  inputId: 'id',
  labelName: 'label',
  name: 'name',
  placeholder: 'input',
  type: 'input',
};

export { Input };

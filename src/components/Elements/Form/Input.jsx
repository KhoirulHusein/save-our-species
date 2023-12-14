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
      onChange,
      inputId,
      labelName,
      isLabel,
      wrapClassName,
      textLabelColor,
      roundedCorner,
      inputWidth,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    const defaultTextColor = textLabelColor || 'text-white-900';

    return (
      <div className={`${wrapClassName} ${inputWidth}`}>
        {isLabel && (
          <label htmlFor={inputId} className={`block mb-2 text-sm font-medium ${defaultTextColor} dark:text-white`}>
            {labelName}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm ${roundedCorner} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
      </div>
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
  onChange: PropTypes.func,
  textLabelColor: PropTypes.string,
  roundedCorner: PropTypes.string,
  inputWidth: PropTypes.string,
};

Input.defaultProps = {
  wrapClassName: 'input',
  className: 'input',
  inputId: 'id',
  labelName: 'label',
  name: 'name',
  placeholder: 'input',
  type: 'input',
  isLabel: false,
  onChange: null,
  textLabelColor: 'text-white-A700',
  roundedCorner: 'rounded-sm',
  inputWidth: ' ',
};

export { Input };

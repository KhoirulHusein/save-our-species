/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
// import { ErrorMessage } from '../../components/ErrorMessage';

const variants = { fill: { blue_gray_100: 'bg-blue_gray-100 text-orange-50' } };
const shapes = { square: 'rounded-none' };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = '',
      className = '',
      name = '',
      children,
      label = '',
      errors = [],
      shape = 'square',
      size = '',
      variant = 'fill',
      color = 'blue_gray_100',
      id = 'checkbox_id',
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ''} ${
              (variant && variants[variant]?.[color]) || ''
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {/* <ErrorMessage errors={errors} /> */}
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(['square']),

  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['blue_gray_100']),
};

export { CheckBox };

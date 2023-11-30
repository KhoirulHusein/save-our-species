/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const shapes = { circle: 'rounded-[50%]', round: 'rounded-[7px]' };
const variants = {
  fill: {
    white_A700: 'bg-white-A700 text-black-900',
    light_green_800: 'bg-light_green-800 text-white-A700',
    green_400: 'bg-green-400 text-white-A700',
    red_A700_01: 'bg-red-A700_01 text-white-A700',
    blue_gray_100: 'bg-blue_gray-100',
  },
};
const sizes = {
  xs: 'p-[7px]',
  sm: 'px-[9px] py-[11px]',
  md: 'p-[15px]',
  lg: 'p-[18px]',
  xl: 'p-[33px] sm:px-5',
};

const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = '',
  size = '',
  variant = '',
  color = '',
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ''} ${
        (size && sizes[size]) || ''
      } ${(variant && variants[variant]?.[color]) || ''}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(['circle', 'round']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf([
    'white_A700',
    'light_green_800',
    'green_400',
    'red_A700_01',
    'blue_gray_100',
  ]),
};

export { Button };

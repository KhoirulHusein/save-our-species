/* eslint-disable object-curly-newline */
import React from 'react';

const sizeClasses = {
  txtUbuntuRegular25: 'font-normal font-ubuntu',
  txtUbuntuBold50: 'font-bold font-ubuntu',
  txtUbuntuBold32: 'font-bold font-ubuntu',
  txtUbuntuMedium24: 'font-medium font-ubuntu',
  txtUbuntuLight20: 'font-light font-ubuntu',
  txtUbuntuRegular20: 'font-normal font-ubuntu',
  txtUbuntuBold30: 'font-bold font-ubuntu',
  txtUbuntuBold13: 'font-bold font-ubuntu',
  txtUbuntuBold36: 'font-bold font-ubuntu',
  txtUbuntuRegular24: 'font-normal font-ubuntu',
  txtUbuntuMedium40: 'font-medium font-ubuntu',
  txtUbuntuBold28: 'font-bold font-ubuntu',
  txtUbuntuLight20WhiteA700: 'font-light font-ubuntu',
  txtUbuntuLight18: 'font-light font-ubuntu',
  txtUbuntuRegular20WhiteA700: 'font-normal font-ubuntu',
  txtUbuntuBold36Deeporange800: 'font-bold font-ubuntu',
  txtUbuntuBold20WhiteA700: 'font-bold font-ubuntu',
  txtUbuntuBold30Orange50: 'font-bold font-ubuntu',
  txtUbuntuBold50Lightgreen800: 'font-bold font-ubuntu',
  txtUbuntuBold20Deeporange800: 'font-bold font-ubuntu',
  txtUbuntuRegular36: 'font-normal font-ubuntu',
  txtUbuntuRegular14: 'font-normal font-ubuntu',
  txtUbuntuRegular15: 'font-normal font-ubuntu',
  txtUbuntuBold40WhiteA700: 'font-bold font-ubuntu',
  txtUbuntuRegular15WhiteA700: 'font-normal font-ubuntu',
  txtUbuntuRegular16: 'font-normal font-ubuntu',
  txtUbuntuRegular18: 'font-normal font-ubuntu',
  txtUbuntuBold32Orange50: 'font-bold font-ubuntu',
  txtUbuntuBold42: 'font-bold font-ubuntu',
  txtUbuntuBold20: 'font-bold font-ubuntu',
  txtUbuntuBold20WhiteA7009e: 'font-bold font-ubuntu',
  txtUbuntuBold40: 'font-bold font-ubuntu',
  txtUbuntuRegular24WhiteA700: 'font-normal font-ubuntu',
  txtUbuntuBold25: 'font-bold font-ubuntu',
  txtUbuntuRegular12: 'font-normal font-ubuntu',
  txtUbuntuBold32Deeporange800: 'font-bold font-ubuntu',
  txtUbuntuBold18: 'font-bold font-ubuntu',
  txtUbuntuBold15: 'font-bold font-ubuntu',
  txtUbuntuBold30Deeporange800: 'font-bold font-ubuntu',
  txtUbuntuMedium16: 'font-medium font-ubuntu',
  txtUbuntuBold36WhiteA700: 'font-bold font-ubuntu',
  txtUbuntuBold30Black900: 'font-bold font-ubuntu',
};

const Text = ({ children, className = '', size, as, ...restProps }) => {
  const Component = as || 'p';

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

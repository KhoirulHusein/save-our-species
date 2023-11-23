/* eslint-disable react/prop-types */
import React from 'react';

function Title(props) {
  const { variant, children } = props;
  return (
    <h1 className={`${variant}`}>
      {children}
    </h1>
  );
}

export default Title;

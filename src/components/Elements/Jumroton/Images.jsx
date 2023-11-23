/* eslint-disable react/prop-types */
import React from 'react';

function Images(props) {
  const { source } = props;
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <img className="flex w-full h-full object-cover object-center" src={source} alt="" />
    </div>
  );
}

export default Images;

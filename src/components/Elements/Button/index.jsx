/* eslint-disable react/prop-types */
import React from 'react';

function Button(props) {
  const { buttonText } = props;
  return (
    <div className="w-fit px-6 py-4 bg-[#606C38] rounded-[7px] justify-center items-center gap-2.5 inline-flex">
      <button className="text-center text-white text-base font-medium" type="button">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

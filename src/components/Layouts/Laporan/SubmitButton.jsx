import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Elements/Button/Buttons';

function SubmitButton() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 font-ubuntu mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 p-0">
      <Button
        className="common-pointer cursor-pointer mx-auto mb-20 mt-20 text-center min-w-[198px] md:min-w-[198px] text-lg tracking-[-0.18px] transition-transform duration-300 transform hover:scale-105 sm:text-sm rounded-full"
        onClick={() => navigate('/laporansuccess')}
        shape="round"
        size="md"
        variant="fill"
        color="light_green_800"
      >
        Submit
      </Button>
    </div>
  );
}

export default SubmitButton;

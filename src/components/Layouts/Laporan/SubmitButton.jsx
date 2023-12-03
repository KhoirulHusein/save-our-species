import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Elements/Button/Buttons';

function SubmitButton() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 font-ubuntu mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-0">
      <Button
        className="cursor-pointer min-w-[198px] mt-20 md:ml-[50%] ml-auto mr-auto mb-20 rounded-full text-center text-lg md:text-l tracking-[-0.20px] transition-transform duration-300 transform hover:scale-105"
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

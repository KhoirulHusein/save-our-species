import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';

const FailsSections = () => {
  const navigate = useNavigate();
  const [cooldown, setCooldown] = useState(2 * 60);

  useEffect(() => {
    let timer;

    if (cooldown >= 0) {
      timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      if (cooldown === 0) {
        navigate('/donation');
      }
    };
  }, [cooldown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleButtonClick = () => {
    navigate('/donation');
  };

  return (
    <div className="w-[500px] h-fit bg-light_green-800 rounded-[20px] p-10 items-center lg:w-[450px] lg:h-fit md:w-full md:h-fit sm:w-fit sm:h-fit xs:w-fit xs:h-fit">
      <Text
        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01"
        size="txtUbuntuBold36Deeporange800"
      >
        Oops payment failed
      </Text>
      <Text
        className=" text-orange-50 text-lg w-fit mt-1 xs:text-sm"
        size="txtUbuntuLight20"
      >
        Silahkan cek kembali pembayaran anda...
      </Text>
      <div className="py-4">
        <Img
          className="justify-center mx-auto py-5 object-cover rounded-[20px] w-4/5"
          src="images/failed.png"
          alt="Failed Ilustration"
        />
        <Text
          className="text-center text-orange-50 text-xl mt-1 xs:text-sm"
          size="txtUbuntuLight20"
        >
          {formatTime(cooldown)}
        </Text>
        {cooldown === 0 && (
          <Button onClick={handleButtonClick} className="text-gray-900_01 mt-4">
            Kembali ke Halaman Utama
          </Button>
        )}
      </div>
    </div>
  );
};

export default FailsSections;

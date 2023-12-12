import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';
import { initializeAOS } from '../../Fragments/AosInit/AosInits';

const Donation = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="h-screen md:h-[643px] mt-[223px] relative w-full">
      <Img
        className="h-screen m-auto object-cover w-full"
        src="images/donationTurtle.jpg"
        alt="rectangle521"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      />
      <div className="absolute bottom-[28%] flex flex-col gap-[19px] inset-x-[0] items-center justify-start mx-auto w-[77%] xs:justify-center sm:justify-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-detaly="200">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-full xs:text-xl sm:text-xl"
          size="txtUbuntuBold36WhiteA700"
        >
          Kami Mengandalkan Dukungan Kalian untuk Melindungi Hewan Liar
          dan Memastikan Habitatnya Tetap Aman
        </Text>
        <Button
          className="common-pointer cursor-pointer min-w-[155px] text-center text-lg tracking-[-0.18px]"
          onClick={() => navigate('/donation')}
          shape="round"
          color="light_green_800"
          size="lg"
          variant="fill"
        >
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default Donation;

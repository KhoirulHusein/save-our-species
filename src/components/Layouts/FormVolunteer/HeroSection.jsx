import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';

function HeroFormVolunteer() {
  return (
    <div className="relative w-full">
      <Img
        className="h-[595px] m-auto object-cover w-[full]"
        src="images/img_createimageof.png"
        alt="hero-image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start p-10 sm:px-5 drop-shadow-[0_35px_35px_#000]">
          {' '}
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px] z-[999]"
            size="txtUbuntuBold40"
          >
            Form Pendaftaran
          </Text>
          <Text
            className="my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px] z-[999]"
            size="txtUbuntuBold40"
          >
            Volunteer
          </Text>
        </div>
      </div>
    </div>
  );
}

export default HeroFormVolunteer;

import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';

function HeroListVolunteer() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative  ">
        <Img
          className="w-full h-[calc(100vh - 64px)] object-cover"
          src="images/hero_listvolunteer.png"
          alt="hero-image"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start p-10 sm:px-5 drop-shadow-[0_35px_35px_#000]">
          <Text
            className="sm:text-2xl md:text-3xl lg:text-4xl text-5xl text-orange-50 tracking-[-0.40px] z-[999]"
            size="txtUbuntuBold40"
          >
            Animals Need You
          </Text>
          <Text
            className="my-[3px] sm:text-lg md:text-xl lg:text-2xl text-3xl text-orange-50 tracking-[-0.40px] z-[999]"
            size="txtUbuntuBold40"
          >
            Bergabung Dalam Aksi Lestarikan Satwa
          </Text>
        </div>
      </div>
    </div>
  );
}

export default HeroListVolunteer;

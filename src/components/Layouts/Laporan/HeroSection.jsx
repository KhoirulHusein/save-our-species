import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';

function HeroLanding() {
  return (
    <div className="relative w-full">
      <Img
        className="h-[595px] m-auto object-cover w-[full] sm:w-auto"
        src="images/img_aarmedhunter.png"
        alt="hero-image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start p-10 sm:px-5 drop-shadow-[0_35px_35px_#000]">
          <Text
            className="sm:text-4xl md:text-[38px] text-[50px] text-orange-50 tracking-[-0.40px] z-[999] text-shadow-sm text-black-50"
            size="txtUbuntuBold40"
          >
            Form Pengaduan
          </Text>
          <Text
            className="mb-[17px] sm:text-[20px] md:text-[38px] text-[20px] text-orange-50 tracking-[-0.20px] text-shadow-sm text-black-50 sm:text-center"
            size="txtUbuntuBold20"
          >
            Isi form dengan benar dan bukan laporan fiktif
          </Text>
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;

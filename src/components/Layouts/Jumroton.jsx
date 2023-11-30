import React from 'react';
import { Img } from '../Elements/Jumroton/Images';
import { Text } from '../Elements/Text/Texts';

function Jumroton() {
  return (
    <div className="h-screen mt-[108px] relative w-full">
      <Img
        className="h-screen m-auto object-cover w-full"
        src="images/redArowana.jpg"
        alt="Red Arowana"
      />
      <div className="absolute w-[959px] h-[234px] lg:w-[90%] md:w-[80%] sm:w-[90%] flex flex-col gap-[43px]  inset-[0] items-center justify-center m-auto p-[13px] rounded-[20px] z-10">
        <Text
          className="md:text-xl sm:text-base text-3xl text-orange-50 lg:text-2xl"
          size="txtUbuntuBold32Orange50"
        >
          Ikan Arwana Merah
        </Text>
        <Text
          className="mb-[42px] text-lg md:text-sm lg:text-base text-center text-orange-50 text-shadow-ts sm:text-xs w-[99%] sm:w-full"
          size="txtUbuntuRegular24"
        >
          Hewan ini kini telah dinyatakan sebagai hewan langka dan
          dilindungi oleh Surat Keputusan Bupati kapuas Hulu Nomor 6 Tahun
          2001, yang menyatakan Danau Lindung Empangau Kalimantan Barat
          ditetapkan sebagai danau lindung.
        </Text>
      </div>
      <div className="absolute w-[959px] h-[234px] lg:w-[90%] md:w-[80%] sm:w-[90%] blur-[20px] backdrop-opacity-[0.5] bg-black-900_4c flex flex-col gap-[43px]  inset-[0] items-center justify-center m-auto p-[13px] rounded-[20px] z-[0]" />
    </div>
  );
}

export default Jumroton;

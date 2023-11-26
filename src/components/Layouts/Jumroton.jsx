import React from 'react';
import { Img } from '../Elements/Jumroton/Images';
import { Text } from '../Elements/Text/Texts';

function Jumroton() {
  return (
    <div className="h-[1000px] md:h-[1108px] mt-[108px] md:px-5 relative w-full">
      <Img
        className="h-[1000px] m-auto object-cover w-full"
        src="images/redArowana.jpg"
        alt="Red Arowana"
      />
      <div className="absolute bg-black-900 bottom-[0] h-[89px] right-[0] w-[7%]" />
      <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] flex flex-col gap-[43px] h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-[20px]">
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-orange-50"
          size="txtUbuntuBold32Orange50"
        >
          Ikan Arwana Merah
        </Text>
        <Text
          className="mb-[42px] text-2xl md:text-[22px] text-center text-orange-50 text-shadow-ts sm:text-xl w-[99%] sm:w-full"
          size="txtUbuntuRegular24"
        >
          Hewan ini kini telah dinyatakan sebagai hewan langka dan
          dilindungi oleh Surat Keputusan Bupati kapuas Hulu Nomor 6 Tahun
          2001, yang menyatakan Danau Lindung Empangau Kalimantan Barat
          ditetapkan sebagai danau lindung.
        </Text>
      </div>
    </div>
  );
}

export default Jumroton;

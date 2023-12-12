/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { initializeAOS } from '../../Fragments/AosInit/AosInits';

function ExploreAnimals() {
  useEffect(() => {
    initializeAOS();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Text
        className="mt-[114px] md:text-3xl sm:text-3xl text-[32px] text-light_green-800 xs:p-1 xs:text-center"
        size="txtUbuntuBold32"
      >
        Explore The Animal
      </Text>
      <Text
        className="mt-[17px] text-center text-orange-50 text-xl w-[78%] sm:w-ful sm:p-1 xs:text-base sm:text-base"
        size="txtUbuntuRegular20"
      >
        Mulailah perjalanan menawan melalui beragam alam satwa liar dengan bagian Jelajahi
        Satwa kami. Temukan keindahan luar biasa dan kisah tak terhitung dari dunia hewan.
      </Text>
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1135px] mt-[53px] mx-auto md:px-10 w-full lg:px-5">
        <div className="h-[621px] relative w-[32%] md:w-full" onClick={() => navigate('/animals/details/65630497a9b079f1efc98f8d')} data-aos="zoom-in-right" data-aos-duration="2000">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/tiger.png"
            alt="rectangle475"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c backdrop-blur-md bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-b-[20px] w-full" style={{ zIndex: 1 }}>
            <Text
              className="mb-[90px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[90%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Sambutlah ketangguhan dan keanggunan Harimau Sumatra, simbol keberagaman hayati
              yang memukau di hutan tropis Indonesia.
            </Text>
          </div>
        </div>
        <div className="md:h-[621px] h-[625px] ml-9 md:ml-[0] lg:ml-5 relative w-[33%] md:w-full" onClick={() => navigate('/animals/details/65630497a9b079f1efc98f92')} data-aos="zoom-in" data-aos-duration="1000">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/orangUtan.png"
            alt="rectangle476"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c backdrop-blur-md bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-b-[20px] w-full">
            <Text
              className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[84%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Terpesona oleh kecerdasan dan keunikan orang utan? Temukan kisah inspiratif dan
              dukung pelestarian mereka di sini!
            </Text>
          </div>
        </div>
        <div className="md:h-[621px] h-[625px] md:ml-[0] ml-[35px] lg:ml-5 relative w-[30%] md:w-full" onClick={() => navigate('/animals')} data-aos="zoom-in-left" data-aos-duration="3000">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/peacock.png"
            alt="rectangle477"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c backdrop-blur-md bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-b-[20px] w-full">
            <Text
              className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[93%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Keindahan alami terpancar melalui kemegahan warna bulu Burung Merak, saksikan
              keanggunan mereka dalam penerbangan di sini
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreAnimals;

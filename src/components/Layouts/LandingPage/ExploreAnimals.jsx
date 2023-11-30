import React from 'react';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';

function ExploreAnimals() {
  return (
    <>
      <Text
        className="mt-[114px] md:text-3xl sm:text-3xl text-[32px] text-light_green-800"
        size="txtUbuntuBold32"
      >
        Explore The Animal
      </Text>
      <Text
        className="mt-[17px] text-center text-orange-50 text-xl w-[78%] sm:w-ful sm:p-1 xs:text-base sm:text-base"
        size="txtUbuntuRegular20"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&#39;s standard dummy
        text ever since the 1500s
      </Text>
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1135px] mt-[53px] mx-auto md:px-10 w-full lg:px-5">
        <div className="h-[621px] relative w-[32%] md:w-full">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/tiger.png"
            alt="rectangle475"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-b-[20px] w-full" style={{ zIndex: 1 }}>
            <Text
              className="mb-[90px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[90%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s
            </Text>
          </div>
        </div>
        <div className="md:h-[621px] h-[625px] ml-9 md:ml-[0] lg:ml-5 relative w-[33%] md:w-full">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/orangUtan.png"
            alt="rectangle476"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-b-[20px] w-full">
            <Text
              className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[84%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s
            </Text>
          </div>
        </div>
        <div className="md:h-[621px] h-[625px] md:ml-[0] ml-[35px] lg:ml-5 relative w-[30%] md:w-full">
          <Img
            className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
            src="images/peacock.png"
            alt="rectangle477"
          />
          <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-b-[20px] w-full">
            <Text
              className="mb-[98px] text-2xl md:text-[22px] text-white-A700 sm:text-lg w-[93%] sm:w-full xs:text-base"
              size="txtUbuntuRegular24WhiteA700"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreAnimals;

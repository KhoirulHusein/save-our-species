import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import { Button } from '../../Elements/Button/Buttons';

function HeroLanding() {
  return (
    <>
      <Img
        className="absolute top-0 left-0 w-full h-full object-cover object-center sm:object-left"
        src="images/heroLandingPage.jpg"
        alt="herolandingpage"
      />
      <div className="absolute flex flex-col md:gap-10 gap-[291px] inset-x-[0] items-start justify-start mx-auto xl:top-[30%] lg:top-[28%] sm:top-[15%] w-[89%]">
        <div className="flex flex-col gap-[23px] items-start justify-start w-[38%] md:w-full">
          <Text
            className="text-3xl sm:text-[32px] md:text-[34px] text-deep_orange-300 w-full md:w-[50%] sm:w-[70%]"
            size="txtUbuntuBold36"
          >
            Melindungi Keajaiban Terancam
          </Text>
          <Text
            className="leading-[130.00%] text-orange-50 text-xl w-fit sm:w-[70%] sm:text-[20px] md:w-[50%]"
            size="txtUbuntuRegular20"
          >
            Jelajahi kisah-kisah penuh keajaiban, tantangan, dan harapan
            yang melibatkan kita semua dalam menjaga keberlanjutan hidup
            sang raja hutan.
          </Text>
          <Button
            className="cursor-pointer font-medium min-w-[132px] text-base text-center tracking-[-0.16px]"
            shape="round"
            color="light_green_800"
            size="md"
            variant="fill"
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroLanding;

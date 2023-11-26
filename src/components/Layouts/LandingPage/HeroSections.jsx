import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import Button from '../../Elements/Button/Buttons';
import Header from '../../Fragments/Navigation/Navbar';

function HeroLanding() {
  return (
    <>
      <Img
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src="images/heroLandingPage.jpg"
        alt="herolandingpage"
      />
      <div className="absolute flex flex-col md:gap-10 gap-[291px] inset-x-[0] items-start justify-start mx-auto top-[2%] w-[89%]">
        <Header className="flex flex-row items-center justify-center w-full" />
        <div className="flex flex-col gap-[23px] items-start justify-start w-[38%] md:w-full">
          <Text
            className="text-3xl sm:text-[32px] md:text-[34px] text-deep_orange-300 w-full"
            size="txtUbuntuBold36"
          >
            Melindungi Keajaiban Terancam
          </Text>
          <Text
            className="leading-[130.00%] text-orange-50 text-xl w-fit sm:w-full"
            size="txtUbuntuRegular20"
          >
            Jelajahi kisah-kisah penuh keajaiban, tantangan, dan harapan
            yang melibatkan kita semua dalam menjaga keberlanjutan hidup
            sang raja hutan.
          </Text>
          <Button buttonText="Learn More" />
        </div>
      </div>
    </>

  );
}

export default HeroLanding;

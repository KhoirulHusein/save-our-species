import React from 'react';
import { Text } from '../../Elements/Text/Texts';
import ExploreSection from '../../Fragments/Navigation/ExploreSection';

function ExploreAnimals() {
  const sectionProps1 = {
    className: 'h-[621px] relative w-[32%] md:w-full',
    imageSrc: 'images/tiger.jpg',
    altSrc: 'Tiger Sumatra',
  };

  const sectionProps2 = {
    className: 'md:h-[621px] h-[625px] ml-9 md:ml-[0] relative w-[33%] md:w-full',
    imageSrc: 'images/orangutan.jpg',
    altSrc: 'Orangutan',
  };

  const sectionProps3 = {
    className: 'md:h-[621px] h-[625px] md:ml-[0] ml-[35px] relative w-[30%] md:w-full',
    imageSrc: 'images/peacock.jpg',
    altSrc: 'Peacock',
  };

  return (
    <>
      <Text
        className="mt-[114px] md:text-3xl sm:text-[28px] text-[32px] text-light_green-800"
        size="txtUbuntuBold32"
      >
        Explore The Animal
      </Text>
      <Text
        className="mt-[17px] text-center text-orange-50 text-xl w-[78%] sm:w-full"
        size="txtUbuntuRegular20"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&#39;s standard dummy
        text ever since the 1500s
      </Text>
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1135px] mt-[53px] mx-auto md:px-5 w-full">
        <ExploreSection {...sectionProps1} />
        <ExploreSection {...sectionProps2} />
        <ExploreSection {...sectionProps3} />
      </div>
    </>
  );
}

export default ExploreAnimals;

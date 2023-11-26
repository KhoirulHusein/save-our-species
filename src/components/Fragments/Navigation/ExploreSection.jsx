import React from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';

function ExploreSection(props) {
  const { className, imageSrc, altSrc } = props;
  return (
    <div className={`${className}`}>
      <Img
        className="absolute h-[621px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
        src={imageSrc}
        alt={altSrc}
      />
      <div className="absolute backdrop-opacity-[0.5] bg-black-900_4c blur-[40.00px] bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[20px] w-full">
        <Text
          className="mb-[90px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[90%] sm:w-full"
          size="txtUbuntuRegular24WhiteA700"
        >
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s
        </Text>
      </div>
    </div>
  );
}

export default ExploreSection;

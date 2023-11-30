import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { List } from '../../Elements/List/List';

const OurJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start max-w-7xl mt-[199px] mx-auto md:px-5 w-full">
      <div className="flex flex-col gap-[10px] md:gap-[20px] items-start justify-start md:mt-0 mt-[177px] lg:mt-[10%] px-5">
        <Text
          className="ml-0.5 lg:text-2xl md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800 w-full"
          size="txtUbuntuBold32Deeporange800"
        >
          Our Job is to improve the world and help animals
        </Text>
        <Text
          className="text-xl lg:text-base md:text-[22px] text-orange-50 text-shadow-ts sm:text-xl w-[96%] sm:w-full"
          size="txtUbuntuRegular24"
        >
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&#39;s
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries,
        </Text>
      </div>
      <List
        className="flex flex-col gap-10 h-[720px] w-[720px] lg:w-auto lg:h-auto sm:w-full md:w-full md:h-full md:gap-[20px] lg:px-5"
        orientation=""
      >
        <div className="flex flex-row md:gap-[20px] items-center justify-between lg:justify-center w-full gap-10">
          <div className="h-[340px] gap-10 lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
            <Img
              className="common-pointer h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] bg-stone-600 md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]"
              src="images/ricefieldLeft.png"
              alt="rectangle499"
              onClick={() => navigate('/volunteer')}
            />
            <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto top-[29%]">
              <Text
                className="text-4xl lg:text-2xl sm:text-[28px] md:text-[34px] text-deep_orange-800 sm:px-2"
                size="txtUbuntuBold36Deeporange800"
              >
                Our Volunteer
              </Text>
              <Text
                className="text-lg lg:text-sm text-orange-50 w-full sm:text-sm px-2 sm:overflow-hidden sm:h-[20px]"
                size="txtUbuntuRegular18"
              >
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Text>
            </div>
          </div>
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
            <Img
              className="h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]"
              src="images/komodoDragon.png"
              alt="rectangle498"
            />
            <Text
              className="absolute bottom-[14%] inset-x-[0] mx-auto text-4xl lg:text-2xl sm:text-[28px] md:text-[34px] text-deep_orange-800 w-max"
              size="txtUbuntuBold36Deeporange800"
            >
              Help Us
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-10 md:gap-[20px] items-center justify-between lg:justify-center w-full">
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] gap-10 md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
            <Img
              className="h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]"
              src="images/ricefieldTop.png"
              alt="rectangle500"
            />
            <div className="absolute flex flex-col items-start justify-start left-[14%] top-[24%]">
              <Text
                className="md:text-3xl lg:text-2xl sm:text-[28px] text-[32px] text-deep_orange-800"
                size="txtUbuntuBold32Deeporange800"
              >
                Get in Touch
              </Text>
              <Text
                className="mt-2 text-sm text-orange-50"
                size="txtUbuntuRegular18"
              >
                Lorem Ipsum
              </Text>
              <Text
                className="mt-1 text-sm text-orange-50"
                size="txtUbuntuRegular18"
              >
                Lorem Ipsum
              </Text>
              <Text
                className="mt-1 text-sm text-orange-50"
                size="txtUbuntuRegular18"
              >
                Lorem Ipsum
              </Text>
            </div>
          </div>
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
            <Img
              className="common-pointer h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]"
              src="images/cub.png"
              alt="rectangle501"
              onClick={() => navigate('/donation')}
            />
            <Text
              className="absolute lg:text-2xl bottom-[15%] inset-x-[0] mx-auto text-4xl sm:text-[24px] md:text-[34px] text-deep_orange-800 w-max"
              size="txtUbuntuBold36Deeporange800"
            >
              Donate Now
            </Text>
          </div>
        </div>
      </List>
    </div>
  );
};

export default OurJobs;

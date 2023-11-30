import React from 'react';
import { Text } from '../../Elements/Text/Texts';
import { List } from '../../Elements/List/List';
import { Img } from '../../Elements/Jumroton/Images';

const Teams = () => {
  return (
    <>
      <Text
        className="mt-20 text-4xl sm:text-[32px] md:text-[34px] text-center text-orange-50"
        size="txtUbuntuRegular36"
      >
        Team Capstone
      </Text>
      <Text
        className="mt-[13px] text-lg text-orange-50"
        size="txtUbuntuRegular18"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <List
        className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-7xl mt-[79px] mx-auto md:px-5 w-full"
        orientation="horizontal"
      >
        <div className="h-80 relative w-full">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle527"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Lorem Ipsum
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle528"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Lorem Ipsum
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle529"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Lorem Ipsum
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle530"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Lorem Ipsum
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
        <div className="h-80 relative w-full">
          <Img
            className="h-80 m-auto object-cover rounded-[20px] w-full"
            src="images/photos.png"
            alt="rectangle531"
          />
          <div className="absolute bg-gray-900_7f bottom-[0] flex flex-col gap-2.5 inset-x-[0] items-start justify-start mx-auto p-2.5 w-full">
            <Text
              className="md:ml-[0] ml-[9px] text-base text-orange-50"
              size="txtUbuntuRegular16"
            >
              Lorem Ipsum
              {' '}
            </Text>
            <Text
              className="mb-[27px] md:ml-[0] ml-[9px] text-orange-50 text-xs w-[92%] sm:w-full"
              size="txtUbuntuRegular12"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

export default Teams;

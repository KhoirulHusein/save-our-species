import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';

const Volunteer = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[699px] md:h-[741px] mt-[181px] md:px-5 relative w-full">
      <div className="absolute h-[539px] inset-x-[0] mx-auto top-[0] w-full">
        <Img
          className="h-[539px] m-auto object-cover w-full"
          src="images/forestBurning.png"
          alt="rectangle524"
        />
        <div className="absolute bg-black-900_4c bottom-[0] flex flex-col items-start justify-end p-[35px] sm:px-5 right-[10%] rounded-[20px]">
          <Text
            className="ml-1 md:ml-[0] mt-[46px] sm:text-2xl md:text-[26px] text-[28px] text-deep_orange-300 w-[98%] sm:w-full"
            size="txtUbuntuBold28"
          >
            Apakah Anda Peduli Terhadap Hewan Langka Seperti Kami?
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-[25px] text-lg text-orange-50 text-shadow-ts w-[94%] sm:w-full"
            size="txtUbuntuRegular18"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry&#39;s
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-3.5 text-orange-50 text-xl"
            size="txtUbuntuRegular20"
          >
            Lorem ipsum dor sit amet
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-[17px] text-orange-50 text-xl"
            size="txtUbuntuRegular20"
          >
            Lorem ipsum dor sit amet
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-[17px] text-orange-50 text-xl"
            size="txtUbuntuRegular20"
          >
            Lorem ipsum dor sit amet
          </Text>
        </div>
      </div>
      <div className="absolute bg-gray-900_01 bottom-[0] flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[39px] sm:px-5 right-[10%] rounded-[20px] w-[35%]">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.40px]"
          size="txtUbuntuMedium40"
        >
          712
          {' '}
        </Text>
        <Text
          className="leading-[18.00px] ml-4 sm:ml-[0] text-lg text-white-A700 tracking-[-0.18px] w-[22%] sm:w-full"
          size="txtUbuntuLight18"
        >
          Sudah bergabung
        </Text>
        <Button
          className="common-pointer cursor-pointer font-medium min-w-[178px] sm:ml-[0] ml-[47px] sm:mt-0 my-0.5 text-center text-lg tracking-[-0.18px]"
          onClick={() => navigate('/volunteer')}
          shape="round"
          color="light_green_800"
          size="lg"
          variant="fill"
        >
          Volunteer Now
        </Button>
      </div>
      <Img
        className="absolute bottom-[0] h-[560px] left-[10%] object-cover rounded-[20px] w-[560px]"
        src="images/volunteerOrangUtan.png"
        alt="rectangle522"
      />
    </div>
  );
};

export default Volunteer;

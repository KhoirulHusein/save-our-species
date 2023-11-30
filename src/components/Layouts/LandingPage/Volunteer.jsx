import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';

const Volunteer = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[699px] md:h-[741px] mt-[181px] md:px-0 relative w-full xs:p-0 xs:justify-center xs:flex sm:p-0 sm:justify-center sm:flex md:flex md:justify-center">
      <div className="absolute h-[539px] inset-x-[0] mx-auto top-[0] w-full sm:h-[700px]">
        <Img
          className="h-[539px] m-auto object-cover w-full"
          src="images/forestBurning.png"
          alt="rectangle524"
        />
        <div className="absolute xl:w-[40%] bg-black-900_4c bottom-[0] flex flex-col items-start justify-end p-[35px] sm:px-5 right-[10%] rounded-[20px] xs:justify-center xs:right-0 xs:mx-5 xs:p-[20px] xs:bottom-[23%] sm:justify-center sm:right-0 sm:bottom-[16%] sm:mx-5 md:3px">
          <Text
            className="ml-1 md:ml-[0] mt-[46px] md:text-[26px] text-[28px] text-deep_orange-300 w-[98%] sm:w-full xs:mt-[10px] xs:text-xl sm:mt-0 sm:text-xl"
            size="txtUbuntuBold28"
          >
            Apakah Anda Peduli Terhadap Hewan Langka Seperti Kami?
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-[25px] text-lg text-orange-50 text-shadow-ts w-[94%] xs:text-sm sm:w-full sm:text-sm"
            size="txtUbuntuRegular18"
          >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the
            industry&#39;s
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-3.5 text-orange-50 text-xl xs:text-sm sm:text-sm"
            size="txtUbuntuRegular20"
          >
            Lorem ipsum dor sit amet
          </Text>
          <Text
            className="ml-1 md:ml-[0] mt-[17px] text-orange-50 text-xl xs:text-sm sm:text-sm"
            size="txtUbuntuRegular20"
          >
            Lorem ipsum dor sit amet
          </Text>

        </div>
      </div>
      <div className="absolute bg-gray-900_01 bottom-[0] flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[39px]  sm:px-5 xl:right-[10%] rounded-[20px] w-[35%] xs:bottom-[-5%] xs:w-[70%] xs:p-[20px] sm:w-[60%] sm:bottom-[-15%]">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[-0.40px] xs:text-3xl"
          size="txtUbuntuMedium40"
        >
          712
          {' '}
        </Text>
        <Text
          className="leading-[18.00px] ml-4 sm:ml-[0] text-lg text-white-A700 tracking-[-0.18px] w-[22%] xs:text-base xs:text-center sm:w-full sm:text-center"
          size="txtUbuntuLight18"
        >
          Sudah bergabung
        </Text>
        <Button
          className="common-pointer cursor-pointer font-medium min-w-[178px] sm:ml-[0] ml-[47px] sm:mt-0 my-0.5 text-center text-lg xs:text-base tracking-[-0.18px]"
          onClick={() => navigate('/volunteer')}
          shape="round"
          color="light_green_800"
          size="sm"
          variant="fill"
        >
          Volunteer Now
        </Button>
      </div>
      <Img
        className="absolute bottom-[0] h-[530px] xl:left-[10%] object-cover rounded-[20px] w-[560px] xs:flex xs:justify-center xs:top-3 xs:w-[180px] xs:h-[180px] sm:flex sm:justify-center sm:top-5 sm:w-[230px] sm:h-[230px] md:flex md:justify-center md:w-[350px] md:h-[350px] md:top-8"
        src="images/volunteerOrangUtan.jpg"
        alt="rectangle522"
      />
    </div>
  );
};

export default Volunteer;
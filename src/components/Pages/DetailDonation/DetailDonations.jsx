/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../Elements/Button/Buttons';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import { Input } from '../../Elements/Form/Input';
import { CheckBox } from '../../Elements/CheckBox/CheckBoxs';

import Header from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';

const DetailDonationTwoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 min-h-screen font-ubuntu">
      <Header />
      <div className="py-[10%] px-[10%] lg:px-[5%] lg:py-[15%] md:py-[25%] sm:py-[30%] xs:py-[40%]">
        <div className="flex justify-center items-center gap-5 w-full md:flex-col">
          <Img
            className="bg-white w-[500px] h-[500px] object-cover rounded-[20px] lg:w-[350px] lg:h-[550px] md:w-full md:h-fit sm:w-fit sm:h-[320px]"
            src="images/donationDetail.png"
            alt="Elephant"
          />
          <div className="w-[500px] h-fit bg-gray-900_01 rounded-[20px] p-10 items-center lg:w-[450px] lg:h-fit md:w-full md:h-fit sm:w-fit sm:h-fit xs:w-fit xs:h-fit">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-800"
              size="txtUbuntuBold36Deeporange800"
            >
              Ayo Berdonasi
            </Text>
            <Text
              className=" text-orange-50 text-xl w-fit mt-1 xs:text-sm"
              size="txtUbuntuLight20"
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <div className="py-4">
              <Input
                isLabel={false}
                type="email"
                placeholder="Masukkan Email"
                className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
              />
            </div>
            <div className="flex py-2 gap-4">
              <Input
                isLabel={false}
                type="text"
                placeholder="First Name"
                className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
              />
              <Input
                isLabel={false}
                type="text"
                placeholder="Last Name"
                className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
              />
            </div>
            <Text
              className="my-4 text-deep_orange-800 text-xl tracking-[-0.20px]"
              size="txtUbuntuBold20Deeporange800"
            >
              Jumlah Berdonasi
            </Text>
            <Input
              id="jumlah_donasi"
              isLabel={false}
              type="number"
              placeholder="Jumlah Donasi"
              className="w-full bg-blue_gray-100 border border-light_green-800 border-solid h-10 justify-center pl-[17px] sm:pr-5 pr-[35px] py-[11px] rounded-[5px] text-black-900_6d text-sm tracking-[-0.14px]"
            />
            <CheckBox
              className="mt-5 mb-5 text-[15px] text-left text-orange-50 xs:text-sm"
              inputClassName="border border-light_green-800 border-solid mr-3 w-5 h-5"
              name="aggreement"
              id="aggreement"
              label="Saya menyetujui syarat dan ketentuan yang berlaku"
            />
            <div className="flex justify-end">
              <Button
                className="common-pointer cursor-pointer min-w-fit ml- text-center text-lg tracking-[-0.18px]"
                onClick={() => navigate('')}
                shape="round"
                color="light_green_800"
                size="md"
                variant="fill"
              >
                Submit Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default DetailDonationTwoPage;

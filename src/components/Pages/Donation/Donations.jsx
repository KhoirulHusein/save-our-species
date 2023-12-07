/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';

import Header from '../../Fragments/Navbar/Navbar';
import Card from '../../Elements/Card/Card';

const DonationPage = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://18.141.159.81/lembaga');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 9);
  };

  return (
    <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
      <div className="h-[865px] md:px-5 relative w-full">
        <div className="h-[865px] m-auto w-full">
          <Img
            className="h-[865px] m-auto object-cover w-full"
            src="images/donationJumroton.jpeg"
            alt="d18f4d2e2b5f"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[243px] inset-x-[0] items-center justify-start mx-auto top-[5%] w-[89%]">
            <Header className="flex flex-row items-center justify-center w-full" />
            <div className="backdrop-opacity-[0.5] bg-black-900_6d backdrop-blur-md flex flex-col items-end justify-center p-11 md:px-10 sm:px-5">
              <Text
                className="mb-[45px] mr-[34px] sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                size="txtUbuntuBold40"
              >
                Lorem Ipsum is sim
              </Text>
              <Text
                className=" text-orange-50 text-shadow-ts text-xl tracking-[-0.20px]"
                size="txtUbuntuBold20"
              >
                Lorem Ipsum is sim Lorem Ipsum is sim Lorem Ipsum is sim
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Text
        className="mt-[39px] text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-300 tracking-[-0.36px]"
        size="txtUbuntuBold36"
      >
        Lorem Ipsum is sim
      </Text>
      <Text className="text-orange-50 text-xl" size="txtUbuntuLight20">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <div className="lembaga max-w-6xl sm:max-w-sm md:max-w-lg xl:max-w-7xl mx-auto sm:gap-x-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-8 items-stretch sm:text-xs">
        {data.slice(0, visibleData).map((animal) => (
          <Link key={animal._id} to={`lembagas/${animal._id}`}>
            <Card
              showStatus={false}
              idData={`lembaga/${animal._id}`}
              name={animal.namaLembagayayasan}
              backgroundImage={animal.gambar}
              description={animal.overview}
              heightImage="pt-60 md:pt-40 sm:pt-20"
            />
          </Link>
        ))}
      </div>
      {data.length > visibleData && (
      <div className="text-center">
        <Button
          onClick={handleShowMore}
          className="Button bg-light_green-800 text-white-A700 hover:bg-light_green-800"
          shape="round"
          variant="fill"
          color=""
          size="md"
        >
          Show More
        </Button>
      </div>
      )}
    </div>
  );
};

export default DonationPage;

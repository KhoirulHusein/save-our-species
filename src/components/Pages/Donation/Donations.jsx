import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';

import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import Card from '../../Elements/Card/Card';
import Loadings from '../../Fragments/Loader/Loadings';

const DonationPage = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/lembaga');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 9);
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full pb-[12rem]">
        <div className="h-[865px] relative w-full">
          <div className="h-[865px] w-full">
            <Img
              className="h-[865px] m-auto object-cover w-full"
              src="images/donationJumroton.jpeg"
              alt="d18f4d2e2b5f"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[243px] inset-x-[0] items-center justify-start mx-auto top-[35%] w-[89%] text-white-A700 ">
              <Navbar className="flex flex-row items-center justify-center w-full " />
              <div className="backdrop-opacity-[0.5] rounded-[20px] flex flex-col items-center justify-center p-11 xs:p-2 backdrop-blur-[100px]">
                <Text
                  className="text-center mb-[45px] mr-[34px] xs:text-xl xs:mb-4 sm:text-4xl md:text-[38px] text-[40px] text-orange-50 tracking-[-0.40px]"
                  size="txtUbuntuBold40"
                >
                  Satu tindakan, satu perlindungan
                </Text>
                <Text
                  className="text-center text-orange-50 text-shadow-ts text-xl tracking-[-0.20px] xs:text-sm sm:text-base"
                  size="txtUbuntuBold20"
                >
                  Yuk, bersama kita jaga keberlanjutan hidup hewan
                  liar dan dilindungi. Sumbangkan sekarang untuk mendukung habitat alaminya!
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="mt-[39px] text-center text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-300 tracking-[-0.36px]"
          size="txtUbuntuBold36"
        >
          Lembaga Konservasi
        </Text>
        <Text className="text-orange-50 text-xl xs:text-sm sm:text-base md:text-lg text-center" size="txtUbuntuLight20">
          ayo bergerak membantu hewan yang terancam punah
          agar anak dan cucu kita dapat melihatnya
        </Text>
        {error && (
        <div className="text-center text-red-500 mt-4">
          Error:
          {' '}
          {error}
        </div>
        )}
        <div className="listAnimals grid grid-cols-3 p-5 max-w-6xl xs:grid-col-1 xs:max-w-[250px] sm:max-w-[600px] md:max-w-[750px] xl:max-w-7xl mx-auto sm:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-stretch sm:text-xs">
          {loading ? (
            <Loadings />
          ) : (
            data.slice(0, visibleData).map((animal) => (
              <Link key={animal._id} to={`lembaga/${animal._id}`}>
                <Card
                  showStatus={false}
                  showButton={true}
                  buttonClass="flex flex-row justify-end z-50 hover:z-50"
                  buttonShape="round"
                  buttonColor="light_green_800"
                  buttonSize="md"
                  buttonVariant="fill"
                  buttonText="Donate"
                  idData={`lembaga/${animal._id}`}
                  name={animal.namaLembagayayasan}
                  backgroundImage={Array.isArray(animal.gambar) ? animal.gambar[0] : animal.gambar}
                  description={animal.overview}
                  heightImage="pt-60 md:pt-40 sm:pt-20"
                  cardMaxWidth=""
                  hiddenOption={'overflow-hidden h-[100px]'}
                />
              </Link>
            ))
          )}
        </div>
        {data.length > visibleData && (
        <div className="text-center">
          <Button
            onClick={handleShowMore}
            className="cursor-pointer font-medium min-w-[132px] text-base text-center tracking-[-0.16px] xs:text-sm xs:min-w-[100px]"
            shape="round"
            variant="fill"
            color="light_green_800"
            size="md"
          >
            Show More
          </Button>
        </div>
        )}
      </div>
      <Footer />

    </>
  );
};

export default DonationPage;

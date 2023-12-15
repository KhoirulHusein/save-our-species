/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import { Button } from '../../Elements/Button/Buttons';

import 'aos/dist/aos.css';

function HeroLanding() {
  const carouselImages = [
    'images/heroLandingPage1.jpg',
    'images/heroLandingPage2.png',
    'images/heroLandingPage3.png',
    'images/heroLandingPage4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextImage, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, [currentImageIndex]);

  const navigate = useNavigate();
  return (
    <>
      {carouselImages.map((image, index) => (
        <Img
          key={index}
          className={`absolute top-0 left-0 w-full h-screen object-cover object-center ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          src={image}
          alt={`carousel-image-${index}`}
          data-aos={index === currentImageIndex ? 'fade-up' : ''}
        />
      ))}
      <div className="absolute flex flex-col md:gap-10 gap-[291px] inset-x-[0] items-start justify-start mx-auto xl:top-[40%] lg:top-[28%] content-center w-[89%]">
        <div className="flex flex-col gap-[23px] items-start justify-start w-[38%] md:w-full">
          <Text
            className="text-3xl sm:text-[32px] md:text-[34px] text-deep_orange-300 w-full md:w-[50%] sm:w-[70%]"
            size="txtUbuntuBold36"
          >
            Melindungi Keajaiban Terancam
          </Text>
          <Text
            className="leading-[130.00%] text-orange-50 text-xl w-fit sm:w-[70%] sm:text-base md:w-[50%] xs:text-sm"
            size="txtUbuntuRegular20"
          >
            Jelajahi kisah-kisah penuh keajaiban, tantangan, dan harapan
            yang melibatkan kita semua dalam menjaga keberlanjutan hidup
            sang raja hutan.
          </Text>
          <Button
            className="cursor-pointer font-medium min-w-[132px] text-base text-center tracking-[-0.16px] xs:text-sm xs:min-w-[100px]"
            shape="round"
            color="light_green_800"
            size="sm"
            variant="fill"
            onClick={() => navigate('/animals')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroLanding;

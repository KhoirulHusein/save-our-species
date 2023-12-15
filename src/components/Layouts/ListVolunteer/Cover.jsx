import React, { useRef } from 'react';
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import { Button } from '../../Elements/Button/Buttons';

function CoverListVolunteer() {
  const listVolunteerRef = useRef(null);

  const handleScrollToListVolunteer = () => {
    const listVolunteerElement = document.getElementById('listVolunteer');
    if (listVolunteerElement) {
      listVolunteerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('listVolunteerElement is null');
    }
  };

  return (
    <div className="h-[800px] lg:h-[750px] md:h-[759px] sm:max-h-[699px] xs:h-[659px] md:px-5 relative w-full">
      <div className="absolute bg-gray-900_01 flex flex-col md:flex-row-reverse inset-x-0 items-center justify-start mx-auto p-[100px] md:px-10 sm:px-4 md:p-[80px] sm:p-[60px] xs:p-[50px] top-0 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[123px] w-[94%] md:w-full md:mb-[13px] pt-10 ">
          <div className="flex flex-col items-start justify-start px-5">
            <Text className="text-lg xs:text-xs md:text-sm lg:text-md text-orange-50" size="txtUbuntuBold18">
              13 November 2023
            </Text>
            <Text
              className="mt-3 text-3xl xs:text-sm sm:text-md md:text-2xl text-deep_orange-800"
              size="txtUbuntuBold32Deeporange800"
            >
              Taman Nasional Ujung Kulon
            </Text>
            <Text
              className="leading-[25.00px] mt-1 text-lg xs:text-xs md:text-sm lg:text-md text-orange-50 w-full"
              size="txtUbuntuRegular18"
            >

              YABI telah berhasil membawa bersama lebih dari 100 hingga 130 individu yang berkomitmen, tersebar di tiga wilayah operasional utama YABI, yaitu Ujung Kulon, Way Kambas, dan Bukit Barisan Selatan. Melalui upaya bersama ini, Yayasan Badak Indonesia telah memastikan kelangsungan hidup badak di Indonesia.
            </Text>
            <Button
              className="common-pointer cursor-pointer h-[55px] mt-[22px] text-center text-md xs:text-xs md:text-sm md:mx-auto"
              onClick={handleScrollToListVolunteer}
              shape="round"
              color="light_green_800"
              size="lg"
              variant="fill"
            >
              Volunteer Now
            </Button>
          </div>
          {/* gambar yayasan ambil dari api */}
          <Img
            className="h-[460px] md:h-auto object-cover rounded-[20px] lg:w-1/2 md:order-first md:mt-0 "
            src="images/cover_yayasan.png"
            alt="gambar kegiatan volunteer"
          />
        </div>
      </div>
      <div ref={listVolunteerRef} />
    </div>
  );
}

export default CoverListVolunteer;

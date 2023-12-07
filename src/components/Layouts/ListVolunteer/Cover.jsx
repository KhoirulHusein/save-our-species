/* eslint-disable max-len */
import React, { useRef } from 'react'; // Import useRef
import { Img } from '../../Elements/Jumroton/Images';
import { Text } from '../../Elements/Text/Texts';
import { Button } from '../../Elements/Button/Buttons';

function CoverListVolunteer() {
  const listVolunteerRef = useRef(null);

  const handleScrollToListVolunteer = () => {
    listVolunteerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-[800px] lg:h-[1100px] md:h-[1000px] sm:h-[950px] md:px-5 relative w-full">
      <div className="absolute bg-gray-900_01 flex flex-col md:flex-row-reverse inset-x-0 items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 top-0 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[193px] w-[94%] md:w-full md:mb-[13px] pt-10 ">
          <div className="flex flex-col items-start justify-start">
            <Text className="text-lg text-orange-50" size="txtUbuntuBold18">
              13 November 2023
            </Text>
            <Text
              className="mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800"
              size="txtUbuntuBold32Deeporange800"
            >
              Taman Nasional Ujung Kulon
            </Text>
            <Text
              className="leading-[25.00px] mt-2 text-lg text-orange-50 tracking-[-0.18px] w-full"
              size="txtUbuntuRegular18"
            >

              YABI telah berhasil membawa bersama lebih dari 100 hingga 130 individu yang berkomitmen, tersebar di tiga wilayah operasional utama YABI, yaitu Ujung Kulon, Way Kambas, dan Bukit Barisan Selatan. Melalui upaya bersama ini, Yayasan Badak Indonesia telah memastikan kelangsungan hidup badak di Indonesia.
            </Text>
            <Button
              className="common-pointer cursor-pointer min-w-[175px] mt-[22px] text-center text-lg tracking-[-0.18px] md:mx-auto"
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
            className="h-[460px] md:h-auto object-cover rounded-[20px] lg:w-3/4 md:order-first"
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

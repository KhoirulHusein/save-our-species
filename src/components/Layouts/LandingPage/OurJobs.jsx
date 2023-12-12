/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { List } from '../../Elements/List/List';
import { initializeAOS } from '../../Fragments/AosInit/AosInits';

const OurJobs = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start max-w-7xl mt-[199px] mx-auto md:px-5 w-full">
      <div className="flex flex-col gap-[10px] md:gap-[20px] items-start justify-start md:mt-0 mt-[177px] lg:mt-[10%] px-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Text
          className="ml-0.5 lg:text-2xl md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-deep_orange-800 w-full"
          size="txtUbuntuBold32Deeporange800"
        >
          Our Job is to improve the world and help animals
        </Text>
        <Text
          className="text-xl lg:text-base md:text-[22px] text-orange-50 text-shadow-ts sm:text-base w-[96%] sm:w-full xs:text-base xs:overflow-scroll sm:overflow-scroll sm:h-[120px] xs:h-[100px]"
          size="txtUbuntuRegular24"
        >
          Kami berdedikasi untuk meningkatkan kualitas dunia tempat kita tinggal
          dan memperjuangkan kesejahteraan hewan. Bergabunglah dengan kami dalam memberikan
          <span className="text-deep_orange-800 font-bold">
            {' '}
            dampak positif,
            {' '}
          </span>
          dengan melakukan tindakan penuh kasih sayang dalam satu waktu.
        </Text>
      </div>
      <List
        className="flex flex-col gap-10 h-[720px] w-[720px] lg:w-auto lg:h-auto sm:w-full md:w-full md:h-full md:gap-[20px] lg:px-5"
        orientation="vertical"
      >
        <div className="flex flex-row md:gap-[20px] items-center justify-between lg:justify-center w-full gap-10 xs:flex-col sm:flex-col">
          <div className="h-[340px] gap-10 lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] sm:w-[300px] sm:h-[300px] xs:w-[200px] xs:h-[200px]" onClick={() => navigate('/volunteer')} data-aos="fade-down-right">
            <Img
              className="common-pointer h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] bg-green-400 md:w-[250px] md:h-[250px] sm:w-[300px] sm:h-[300px] xs:w-[200px] xs:h-[200px]"
              src="images/ricefieldLeft.jpg"
              alt="rectangle499"
            />
            <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-auto top-[29%]">
              <Text
                className="text-4xl lg:text-2xl sm:text-[28px] md:text-[34px] text-deep_orange-800 sm:px-2 xs:text-[24px]"
                size="txtUbuntuBold36Deeporange800"
              >
                Our Volunteer
              </Text>
              <Text
                className="text-lg lg:text-sm text-orange-50 w-full sm:text-sm px-3 sm:overflow-hidden sm:h-[20px]"
                size="txtUbuntuRegular18"
              >
                Ikuti kegiatan volunteer bersama yayasan peduli satwa
              </Text>
            </div>
          </div>
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]" onClick={() => navigate('/lapor')} data-aos="fade-down-left">
            <Img
              className="h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]"
              src="images/komodoDragon.png"
              alt="rectangle498"
            />
            <Text
              className="absolute bottom-[14%] inset-x-[0] mx-auto text-4xl lg:text-2xl sm:text-[28px] md:text-[34px] text-deep_orange-800 w-max "
              size="txtUbuntuBold36Deeporange800"
            >
              Help Us
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-10 md:gap-[20px] items-center justify-between lg:justify-center w-full xs:flex-col sm:flex-col">
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] gap-10 md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]" onClick={() => navigate('/Artikel')} data-aos="fade-up-right">
            <Img
              className="h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]"
              src="images/ricefieldTop.jpg"
              alt="rectangle500"
            />
            <div className="absolute flex flex-col items-start justify-start left-[14%] top-[24%]">
              <Text
                className="md:text-3xl lg:text-2xl sm:text-[28px] xs:text-[24px] text-[32px] text-deep_orange-800"
                size="txtUbuntuBold32Deeporange800"
              >
                See article
              </Text>
              <Text
                className="mt-2 text-sm text-orange-50"
                size="txtUbuntuRegular18"
              >
                kami melindungi hewan terancam punah dan dilindungi
              </Text>
            </div>
          </div>
          <div className="h-[340px] lg:w-[200px] lg:h-[200px] relative w-[340px] md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]" onClick={() => navigate('/donation')} data-aos="fade-up-left">
            <Img
              className="common-pointer h-[340px] lg:w-[200px] lg:h-[200px] m-auto object-cover rounded-[20px] w-[340px] md:w-[250px] md:h-[250px] xs:w-[200px] xs:h-[200px] sm:w-[300px] sm:h-[300px]"
              src="images/cub.png"
              alt="rectangle501"
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

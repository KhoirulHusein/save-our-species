import React from 'react';
import HeroListVolunteer from '../../Layouts/ListVolunteer/HeroSection';
import CoverListVolunteer from '../../Layouts/ListVolunteer/Cover';
import BenefitListVolunteer from '../../Layouts/ListVolunteer/Benefit';
import ListVolunteer from '../../Layouts/ListVolunteer/List';
import { Text } from '../../Elements/Text/Texts';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

const Volunteer = () => {
  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
      <Navbar />

      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '16rem' }}>
        <HeroListVolunteer />
        <CoverListVolunteer />
        <div className="relative z-1 -mt-12">
          {' '}
          <BenefitListVolunteer />
        </div>
        <Text
          className="mt-[103px] text-4xl sm:text-[32px] md:text-[34px] text-center text-deep_orange-800 tracking-[-0.36px]"
          size="txtUbuntuBold36Deeporange800"
          id="block1"
        >
          Explore your Volunteer
        </Text>
        <Text
          className="mt-[13px] text-center text-white-A700 text-xl tracking-[-0.20px] "
          size="txtUbuntuBold20WhiteA700"
        >
          Ikuti Kegiatan Volunteer Bersama Yayasan Peduli Satwa
          {' '}
        </Text>
        <ListVolunteer />

      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;

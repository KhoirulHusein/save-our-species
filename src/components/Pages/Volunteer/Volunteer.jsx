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
    <div className="bg-gray-900 text-white-A700 font-ubuntu ">

      <div style={{ paddingBottom: '16rem' }}>
        <Navbar />
        <HeroListVolunteer />
        <CoverListVolunteer />
        <div className="relative z-1 -mt-12 mx-4">
          {' '}
          <BenefitListVolunteer />
        </div>
        <Text
          className="mt-[103px] xs:text-lg md:text-xl lg:text-2xl text-3xl text-center text-deep_orange-800"
          size="txtUbuntuBold36Deeporange800"
          id="block1"
        >
          Explore your Volunteer
        </Text>
        <Text
          className="mt-[13px] text-center text-white-A700 xs:text-sm md:text-lg text-xl "
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

import React from 'react';
import HeroSection from '../../Layouts/Laporan/HeroSection';
import FormSection from '../../Layouts/Laporan/FormSection';
import SubmitButton from '../../Layouts/Laporan/SubmitButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

const Laporan = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Navbar />
        <div className="flex flex-col justify-start w-full">
          <HeroSection />
          <FormSection />
        </div>
      </div>
      <SubmitButton />
      <Footer />
    </>
  );
};

export default Laporan;

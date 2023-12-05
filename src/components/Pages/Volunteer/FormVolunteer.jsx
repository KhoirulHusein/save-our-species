import React from 'react';
import HeroSection from '../../Layouts/FormVolunteer/HeroSection';
import FormSection from '../../Layouts/FormVolunteer/FormSection';
import ApplyButton from '../../Layouts/FormVolunteer/ApplyButton';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

const FormVolunteer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <Navbar />
        <div className="flex flex-col justify-start w-full">
          <HeroSection />
          <FormSection />
        </div>
      </div>
      <ApplyButton />
      <Footer />
    </>
  );
};

export default FormVolunteer;

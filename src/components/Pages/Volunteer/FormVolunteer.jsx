import React from 'react';
import HeroSection from '../../Layouts/FormVolunteer/HeroSection';
import FormSection from '../../Layouts/FormVolunteer/FormSection';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

const FormVolunteer = () => {
  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
      <Navbar />
      <div className="flex flex-col text-black-900 justify-start w-full">
        <HeroSection />
        <FormSection />
      </div>
      <Footer />
    </div>
  );
};

export default FormVolunteer;

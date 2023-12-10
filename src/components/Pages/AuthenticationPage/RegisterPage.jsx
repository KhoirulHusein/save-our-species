import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';

import Header from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import RegisterFormSection from '../../Layouts/AuthenticationPage/RegisterFormSection';

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-950 min-h-screen font-ubuntu">
      <Header />
      <div className="py-[10%] px-[10%] lg:px-[5%] lg:py-[15%] md:py-[25%] sm:py-[30%] xs:py-[40%]">
        <div className="flex px-2 py-1">
          <Button
            onClick={() => navigate('/')}
          >
            <IconArrowLeft color="white" size={24} />
          </Button>
        </div>
        <div className="flex justify-center items-center gap-5 w-full md:flex-col">
          <Img
            className="bg-white w-[500px] h-fit object-cover rounded-[20px] xl:min-h-[500px] lg:w-[350px] lg:h-[550px] md:w-full md:h-fit sm:w-fit sm:h-[320px]"
            src="images/signUpIlustration.png"
            alt="Elephant"
          />
          <RegisterFormSection />
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;

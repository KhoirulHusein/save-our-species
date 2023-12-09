import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const FormVolunteerSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
      <Navbar />

      {/* Content */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '16rem', paddingTop: '6rem' }}>
        {/* Icon */}
        <img
          className="h-[257px] mt-8"
          src="images/img_solarchecklist.svg"
          alt="solarchecklist"
        />

        {/* Success Message */}
        <Text
          className="font-bold font-ubuntu mt-[4rem] mb-8 text-4xl sm:text-[2rem] md:text-[2.2rem] text-center text-white-A700 w-[100%] sm:w-full"
        >
          Kami akan menghubungi anda dengan estimasi 3x24 Jam
        </Text>

        {/* Back to Home Button */}
        <Button
          linkTo="/"
          buttonText="Kembali ke Halaman Utama"
          className="common-pointer cursor-pointer min-w-[269px] mt-[100px] text-center text-lg tracking-[-0.18px]"
          onClick={() => navigate('/')}
          shape="round"
          color="light_green_800"
          size="lg"
          variant="fill"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FormVolunteerSuccess;

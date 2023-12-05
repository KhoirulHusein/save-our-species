import React from 'react';
import { Button } from '../../Elements/Button/Buttons';
import { Text } from '../../Elements/Text/Texts';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

const LaporanSuccess = () => {
  return (
    <div className="bg-gray-900 text-white-A700">
      <Navbar />
      <div className="text-center flex flex-col items-center justify-center pb-40 pt-24">
        <img
          className="h-[257px] md:h-[150px] mt-8"
          src="images/img_solarchecklist.svg"
          alt="solarchecklist"
        />
        <Text
          className="font-bold font-ubuntu mt-[2rem] text-4xl sm:text-[1.5rem] md:text-[2.2rem] text-center text-white-A700 w-[100%] sm:w-full"
        >
          Kami akan menghubungi anda
        </Text>
        <Text
          className="font-bold font-ubuntu mb-[5rem] text-4xl sm:text-[1.5rem] md:text-[2.2rem] text-center text-white-A700 w-[100%] sm:w-full"
        >
          dengan estimasi 3x24 Jam
        </Text>
        <div className="font-ubuntu grid grid-cols-1 md:grid-cols-1 gap-8 p-0">
          <Button
            linkTo="/"
            className="common-pointer cursor-pointer mx-auto text-center min-w-[269px] md:min-w-0 text-lg tracking-[-0.18px] transition-transform duration-300 transform hover:scale-105 sm:text-sm"
            onClick={() => ('/landingpage')}
            shape="round"
            color="light_green_800"
            size="lg"
            variant="fill"
          >
            Kembali ke Halaman Utama
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LaporanSuccess;

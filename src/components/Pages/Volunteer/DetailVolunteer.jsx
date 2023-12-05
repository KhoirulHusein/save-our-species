/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const DetailVolunteerPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />

      <div
        className="flex flex-col pt-24 md:gap-10 gap-[93px] items-center justify-start w-full"
        style={{ paddingBottom: '16rem', paddingTop: '6rem' }}
      >
        <div className="flex flex-col items-start justify-start max-w-7xl mx-auto px-10 w-full">
          <div className="flex flex-row items-center justify-center w-full" />
          <Button
            onClick={() => navigate('/Volunteer')}
            className="h-6 mt-[17px] w-6 cursor-pointer"
            alt="Button Kembali Ke Halaman Volunteer"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Button>
          {/* Gambar Volunteer */}
          <Img
            className="h-[463px] sm:h-auto mt-[21px] object-cover rounded-lg w-full "
            src="images/yayasan-rasi.jpg"
            alt="Gambar Kegiatan Yayasan Rasi"
          />
          <div className="flex md:flex-col flex-row md:gap-2 items-end justify-between mt-9 w-full">
            <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[42%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[38px] text-[40px]sm:text-3xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                size="txtUbuntuBold40WhiteA700"
              >
                Yayasan Konservasi RASI
              </Text>
              <div className="flex flex-row gap-[19px] items-center justify-start w-1/4 md:w-full">
                {/* Ikon Location */}
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-900 text-xl tracking-[-0.20px]" />
                <Text
                  className="text-white-A700 text-lg tracking-[-0.20px]"
                  size="txtUbuntuRegular20WhiteA700"
                >
                  Samarinda
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start mb-0.5 md:mt-0 mt-2 w-[9%] md:w-full">
              <Text
                className="text-white-A700 text-xl tracking-[-0.20px] font-bold font-ubuntu"
              >
                Status
              </Text>
              <Text
                className="cursor-pointer font-bold min-w-[103px] rounded-[5px] text-[15px] text-center tracking-[-0.15px] bg-green-400 px-4 py-2 inline-block"
              >
                Open
              </Text>
            </div>
          </div>
          <div className="bg-gray-900_02 h-px mt-[13px] w-full" />
          <Text
            className="ml-1.5 md:ml-[0] mt-7 xs:text-[21px] sm:text-[27px] md:text-[30px] text-[30px] text-white-A700 tracking-[-0.25px]"
            size="txtUbuntuBold25"
          >
            Description
          </Text>
          <Text
            as="h1"
            className="leading-[20.00px] ml-1.5 md:ml-[0] mt-[25px] xs:text-[21px] sm:text-[23px] md:text-[25px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
            size="txtUbuntuBold20WhiteA700"
          >
            Menyelamatkan Pesut Sungai Mahakam
          </Text>
          <Text
            className="leading-[25.00px] ml-1.5 md:ml-[0] mt-[25px] xs:text-[16px] sm:text-[18px] md:text-[20px] text-[25px] text-white-A700 w-[84%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            Yayasan Konservasi RASIA bertujuan menyelamatkan pesut sungai Mahakam yang terancam punah. Populasinya tinggal sekitar 80 individu, terutama karena belenggu jaring insang.
            <br />
            <br />
            Yayasan ini sedang membangun kawasan lindung melibatkan 26 desa untuk konservasi pesut, praktik penangkapan ikan berkelanjutan, ekowisata, dan restorasi. Tujuannya adalah melestarikan pesut sambil mendukung perikanan lokal dan peluang ekowisata.
          </Text>
          <div className="flex justify-center mt-5 self-center">
            <Button
              className="common-pointer cursor-pointer min-w-[142px] md:ml-[0] text-center text-lg  mt-8"
              onClick={() => navigate('/FormVolunteer')}
              shape="round"
              color="light_green_800"
              size="lg"
              variant="fill"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailVolunteerPage;

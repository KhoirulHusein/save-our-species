import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const DetailVolunteerPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lembaga, setLembaga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFirstSentence = (text) => {
    const sentences = text.split(/\.|\?|!/);
    return sentences[0];
  };

  const getRemainingSentences = (text) => {
    const sentences = text.split(/\.|\?|!/);
    const remainingSentences = sentences.slice(1);
    return remainingSentences.join('. ');
  };

  useEffect(() => {
    const fetchLembaga = async () => {
      try {
        const response = await fetch(`http://45.76.149.156/lembaga/${id}`);
        const data = await response.json();
        setLembaga(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error fetching lembaga details:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLembaga();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error fetching data:
        {' '}
        {error.message}
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
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
            src={lembaga.gambar}
            alt={`Gambar Kegiatan ${lembaga.name}`}
          />
          <div className="flex md:flex-col flex-row md:gap-2 items-end justify-between mt-9 w-full">
            <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[85%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[38px] text-[40px]sm:text-3xl md:text-[38px] text-[40px] text-white-A700 tracking-[-0.40px]"
                size="txtUbuntuBold40WhiteA700"
              >
                {lembaga.namaLembagayayasan}
              </Text>
              <div className="flex flex-row gap-[19px] items-center justify-start w-1/4 md:w-full">
                {/* Ikon Location */}
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-900 text-xl tracking-[-0.20px]" />
                <Text
                  className="text-white-A700 text-lg tracking-[1px]"
                  size="txtUbuntuRegular20WhiteA700"
                >
                  {lembaga.kontak}
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
            className="leading-[32.00px] ml-1.5 md:ml-[0] mt-[25px] xs:text-[21px] sm:text-[23px] md:text-[25px] text-[25px] text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
            size="txtUbuntuBold20WhiteA700"
          >
            {getFirstSentence(lembaga.overview)}
          </Text>
          <Text
            className="leading-[32.00px] text-justify ml-1.5 md:ml-[0] mt-[25px] xs:text-[16px] sm:text-[18px] md:text-[20px] text-[25px] text-white-A700 w-[97%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            {getRemainingSentences(lembaga.overview)}
          </Text>
          <div className="flex justify-center mt-5 self-center">
            <Button
              className="common-pointer cursor-pointer min-w-[142px] md:ml-[0] text-center text-lg  mt-8"
              onClick={() => navigate('/formvolunteer')}
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

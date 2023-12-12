import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../Elements/Text/Texts';
import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

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
          <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between mt-9 w-full ">
            <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[85%] md:w-full ">
              <Text
                className="text-white-A700 text-3xl font-bold xs:text-sm sm:text-md md:text-2xl"
                size="txtUbuntuBold40WhiteA700"
              >
                {lembaga.namaLembagayayasan}
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                {/* Ikon Location */}
                <svg className="w-6 h-6 sm:w-3 sm:h-3 md:w-5 md:h-5 text-green-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <Text
                  className="text-white-A700 text-lg xs:text-[0.6rem] sm:text-sm md:text-md"
                  size="txtUbuntuRegular20WhiteA700"
                >
                  {lembaga && lembaga.kontak ? getFirstSentence(lembaga.kontak) : 'Loading...'}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-full">
                {/* Ikon Link/Chain */}
                <FontAwesomeIcon icon={faLink} className="w-6 h-6 sm:w-3 sm:h-3 md:w-5 md:h-5 text-green-900 " />
                <a
                  href={lembaga.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-A700  text-lg xs:text-[0.6rem] sm:text-sm md:text-md"
                >
                  {lembaga.website}
                </a>
              </div>
            </div>
            <div className="animal-info flex sm:flex-col sm:gap-4 justify-between" />
            <div className="lembaga-status text-center flex flex-col gap-2 sm:text-sm">
              <Text
                className="text-white-A700 text-lg font-bold md:hidden px-5 py-2 rounded-md sm:w-4/12 sm:text-xs"
              >
                Status
              </Text>
              <Text
                className="text-white-A700 font-bold px-4 py-2 rounded-md sm:min-w-[50px] sm:py-1 text-md sm:text-xs md:text-sm cursor-pointer min-w-[90px] text-center bg-green-400"
              >
                Open
              </Text>
            </div>
          </div>
          <div className="bg-gray-900_02 h-px mt-[13px] w-full" />
          <Text
            className="ml-1.5 md:ml-[0] mt-7 text-2xl xs:text-sm sm:text-md md:text-xl text-white-A700 "
            size="txtUbuntuBold25"
          >
            Description
          </Text>
          <Text
            as="h1"
            className="leading-[32.00px] ml-1.5 md:ml-[0] mt-[25px] text-xl xs:text-sm sm:text-md md:text-lg text-white-A700 tracking-[-0.25px] w-[84%] sm:w-full"
            size="txtUbuntuBold20WhiteA700"
          >
            {getFirstSentence(lembaga.overview)}
          </Text>
          <Text
            className="leading-[32.00px] text-justify ml-1.5 md:ml-[0] mt-[25px] text-lg xs:text-xs sm:text-sm md:text-md text-white-A700 w-[97%] sm:w-full"
            size="txtUbuntuRegular25"
          >
            {getRemainingSentences(lembaga.overview)}
          </Text>
          <div className="flex justify-center mt-8 self-center">
            <Button
              className="common-pointer cursor-pointer min-w-[130px] md:ml-[0] text-center text-md xs:text-xs sm:text-sm md:text-md  "
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

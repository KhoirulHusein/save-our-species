import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Carousel from './Carousel';
import { Button } from '../../Elements/Button/Buttons';

const DetailHewan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showOverview, setShowOverview] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [animalData, setAnimalData] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleOverviewClick = () => {
    setShowOverview(true);
    setShowDescription(false);
    setActiveButtonIndex(0);
  };

  const handleDescriptionClick = () => {
    setShowOverview(false);
    setShowDescription(true);
    setActiveButtonIndex(1);
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Punah':
        return 'bg-emerald-800';
      case 'Hampir Punah':
        return 'bg-red-500/50';
      case 'Resiko':
        return 'bg-blue-500';
      case 'Terancam':
        return 'bg-red-600';
      case 'Terancam Kritis':
        return 'bg-yellow-800';
      case 'Hampir Terancam':
        return 'bg-teal-800';
      default:
        return '';
    }
  };

  const fetchAnimalData = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/animals/${id}`);
      setAnimalData(response.data);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  useEffect(() => {
    fetchAnimalData();
  }, [id]);

  return (
    <div className="details-wrapper bg-gray-900">
      <div className="container p-4 max-w-6xl mx-auto flex flex-col gap-6">
        <Button onClick={() => navigate('/animals')}>
          {' '}
          <svg className="w-4 h-4 text-white-A700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
        </Button>
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          <div className="large-image col-span-1">
            <img className="rounded-lg h-full" src={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} alt="" />
          </div>
          <div className="small-image col-span-1 grid grid-cols-2 gap-2">
            <img className="rounded-lg" src={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} alt="" />
            <img className="rounded-lg" src={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} alt="" />
            <img className="rounded-lg" src={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} alt="" />
            <img className="rounded-lg" src={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} alt="" />
          </div>
        </div>
        <div className="carousel-container hidden sm:block">
          <Carousel imageUrl={`${animalData && animalData.gambarLandscape ? animalData.gambarLandscape : 'Loading...'}`} />
        </div>
        <div className="animal-info flex sm:flex-col sm:gap-4 justify-between">
          <div className="animal-name">
            <h2 className="text-white-A700 text-2xl font-bold xs:text-sm sm:text-md md:text-md">{animalData && animalData.namaHewan ? animalData.namaHewan : 'Loading...'}</h2>
          </div>
          <div className="animal-status text-center flex flex-col gap-2 sm:text-sm">
            <p className="text-white-A700 text-lg font-bold sm:hidden">Status</p>
            <span
              className={`text-white-A700 text-sm cursor-default font-bold px-2 py-2 rounded-md sm:w-4/12 sm:text-xs ${
                animalData
                  ? getStatusColorClass(animalData.status)
                  : ''
              }`}
            >
              {animalData && animalData.status ? animalData.status : 'Loading...'}

            </span>
          </div>
        </div>
        <div className="detail-bar flex gap-8 text-white-A700 relative">
          <Button
            onClick={handleOverviewClick}
            className={`${activeButtonIndex === 0 ? 'active' : ''}`}
          >
            Overview
          </Button>
          <Button
            onClick={handleDescriptionClick}
            className={`${activeButtonIndex === 1 ? 'active' : ''}`}
          >
            Description
          </Button>
          <span
            className="blank absolute bottom-0 left-0 h-px bg-slate-200/25 w-full z-0"
          />
          <span
            className={`absolute bottom-0 left-0 z-50 ${
              activeButtonIndex === 0 ? 'w-16' : 'w-20 transform translate-x-24'
            } h-px bg-white-A700 transition-all duration-300`}
          />
        </div>
        <div className="animal-details text-white-A700">
          {showOverview && (
          <>
            <div className="animal-overview">
              <h4 className="font-bold">Animal Overview</h4>
            </div>
            <div className="detail-overview grid grid-cols-2 gap-6 sm:grid-cols-1 mt-6 text-md sm:text-sm">
              <div className="location flex gap-4">
                <svg className="w-6 h-6 text-light_green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <p>{`${animalData && animalData.daerah ? animalData.daerah : 'Loading...'}`}</p>
              </div>
              <div className="habitat flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map text-light_green-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                  <path d="M9 4v13" />
                  <path d="M15 7v13" />
                </svg>
                <p>{`${animalData && animalData.tempatHidup ? animalData.tempatHidup : 'Loading...'}`}</p>
              </div>
              <div className="threats flex flex-col gap-4">
                <div className="icon flex gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle-filled text-light_green-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" strokeWidth="0" fill="currentColor" />
                  </svg>
                  <p>Perlindungan Hukum</p>
                </div>
                <div className="container text-justify flex flex-col gap-4">
                  {animalData && animalData.ancamanPerlindunganHukum ? (
                    animalData.ancamanPerlindunganHukum.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  ) : (
                    'Loading...'
                  )}
                </div>
              </div>
              <div className="characteristics flex flex-col gap-4">
                <div className="icon flex gap-4">
                  <svg className="w-6 h-6 text-light_green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p>Karakteristik :</p>
                </div>
                <div className="container text-justify flex flex-col gap-4">
                  {animalData && animalData.ciriFisik ? (
                    animalData.ciriFisik.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    'Loading...'
                  )}

                </div>
              </div>
            </div>

          </>
          )}
          {showDescription && (
          <div className="wrapper flex flex-col gap-6">
            <div className="animal-description text-md sm:text-sm">
              <h4 className="font-bold">Animal Description</h4>
            </div>
            <div className="description text-justify text-md sm:text-sm">
              <p>{animalData.deskripsi}</p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailHewan;

/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailArticles = () => {
  const { id } = useParams();
  const [animalData, setAnimalData] = useState(null);

  const fetchAnimalData = async () => {
    try {
      const response = await axios.get(`http://18.141.159.81/article/${id}`);
      setAnimalData(response.data);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  useEffect(() => {
    fetchAnimalData();
  }, [id]);

  return (
    <>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url('${animalData && animalData.gambarArticle ? animalData.gambarArticle : 'Loading...'}')` }}>
        <div className="max-w-7xl mx-auto pt-56 md:pt-56 sm:pt-40 xs:pt-20 flex flex-col gap-8 p-6">
          <h1 className="text-left font-bold text-3xl md:text-2xl sm:text-md text-white-A700">{animalData && animalData.judulArticle ? animalData.judulArticle : 'Loading...'}</h1>
          <div className="author-info flex gap-4 text-white-A700">
            <div className="author-picture">
              <img className="rounded-full h-14 w-14 flex items-center justify-center" src={animalData && animalData.gambarPenulis ? animalData.gambarPenulis : 'Loading...'} alt="" />
            </div>
            <div className="author-detail text-sm flex flex-col">
              <p className="font-bold">{animalData && animalData.namaPenulis ? animalData.namaPenulis : 'Loading...'}</p>
              <p className="font-light">{animalData && animalData.tanggalArticle ? animalData.tanggalArticle : 'Loading...'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-gray-900">
        <div className="article text-lg md:text-md sm:text-sm max-w-7xl mx-auto flex flex-col gap-4 text-justify text-white-A700 p-6">
          {animalData && animalData.isiArticle ? (
            animalData.isiArticle.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <p key={index}>{item}</p>
            ))
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </>
  );
};

export default DetailArticles;

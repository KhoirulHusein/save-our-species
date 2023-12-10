/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from '../../Elements/Card/Card';

const ListVolunteer = () => {
  const [data, setData] = useState([]);
  const listVolunteerRef = useRef(null);

  const apiUrl = 'http://45.76.149.156/lembaga';

  const getAllData = () => {
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch API
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="wrapper bg-gray-900">
      <div ref={listVolunteerRef} id="listVolunteer">

        <div className="max-w-6xl mx-auto flex flex flex-col gap-8 p-4 pt-12 ">
          <div className="listLembaga max-w-6xl sm:max-w-sm md:max-w-lg xl:max-w-7xl mx-auto sm:gap-x-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-8 items-stretch sm:text-xs ">
            {data.slice(0).map((lembaga, index) => (
              <Card
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                showButton
                name={lembaga.namaLembagayayasan}
                backgroundImage={lembaga.gambar}
                description={lembaga.overview}
                buttonText="Apply Now"
              // eslint-disable-next-line no-underscore-dangle
                buttonPath={`/DetailVolunteerPage/${lembaga._id}`}
                showHeader
                headingColor="text-left "
                buttonClass="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-4 mr-40 text-center text-sm tracking-[-0.14px] w-[136px] bg-light_green-800 text-white-A700 hover:bg-light_green-800 rounded-[10px] " // eslint-disable-next-line no-underscore-dangle
                idData={`lembaga/details/${lembaga._id}`}
                heightImage="pt-60 md:pt-40 sm:pt-20"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListVolunteer;

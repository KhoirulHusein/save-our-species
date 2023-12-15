import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../../Elements/Card/Card';
import Loadings from '../../Fragments/Loader/Loadings';

const ListVolunteer = () => {
  const [data, setData] = useState([]);
  const listVolunteerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/lembaga');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper bg-gray-900">
      <div ref={listVolunteerRef} id="listVolunteer">

        <div className="max-w-6xl mx-auto flex flex flex-col gap-8 p-4 pt-12 ">
          <div className="listLembaga grid grid-cols-3 p-5 max-w-6xl xs:grid-col-1 xs:max-w-[250px] sm:max-w-[600px] md:max-w-[750px] mx-auto sm:gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch sm:text-xs ">
            {loading ? (
              <div>Loading...</div>
            ) : (
              data.slice(0).map((lembaga, index) => (
                <Link key={index} to={`/DetailVolunteerPage/${lembaga._id}`}>
                  <Card
                    showButton
                    name={lembaga.namaLembagayayasan}
                    backgroundImage={lembaga.gambar}
                    description={lembaga.overview}
                    buttonText="Apply Now"
                    buttonPath={`/DetailVolunteerPage/${lembaga._id}`}
                    showHeader
                    headingColor="text-left "
                    buttonClass="common-pointer cursor-pointer font-medium h-12 md:ml-[0] ml-[5px] mt-4 mr-40 text-center text-sm tracking-[-0.14px] w-[136px] bg-light_green-800 text-white-A700 hover:bg-light_green-800 rounded-[10px] " // eslint-disable-next-line no-underscore-dangle
                    idData={`lembaga/details/${lembaga._id}`}
                    heightImage="pt-60 md:pt-40 sm:pt-20"
                    hiddenOption={'overflow-hidden h-[80px]'}
                  />
                </Link>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListVolunteer;

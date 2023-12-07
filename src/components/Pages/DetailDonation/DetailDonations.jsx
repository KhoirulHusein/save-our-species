import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconArrowLeft } from '@tabler/icons-react';

import { useNavigate, useParams } from 'react-router-dom';

import { Img } from '../../Elements/Jumroton/Images';
import { Button } from '../../Elements/Button/Buttons';

import Header from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import DonationSection from '../../Layouts/DetailDonation/DonationSection';

const DetailDonations = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://18.141.159.81/lembagas/${_id}`);
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [_id]);

  return (
    <div className="bg-slate-950 min-h-screen font-ubuntu">
      <Header />
      <div className="py-[10%] px-[10%] lg:px-[5%] lg:py-[15%] md:py-[25%] sm:py-[30%] xs:py-[40%]">
        <div className="flex px-2 py-1">
          <Button
            onClick={() => navigate('/donation')}
          >
            <IconArrowLeft color="white" size={24} />
          </Button>
        </div>
        <div className="flex justify-center items-center gap-5 w-full md:flex-col">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((animal) => (
              <Img
                key={animal.id} // Add a unique key for each element in the array
                className="bg-white w-[500px] h-fit object-cover rounded-[20px] xl:min-h-[500px] lg:w-[350px] lg:h-[550px] md:w-full md:h-fit sm:w-fit sm:h-[320px]"
                src={animal.gambar}
                alt="Elephant"
              />
            ))
          ) : (
            // Render a loading state or an error message here
            <p>Loading...</p>
          )}

          <DonationSection />
        </div>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default DetailDonations;

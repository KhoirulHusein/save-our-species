/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Card from '../../Elements/Card/Card';

function ListVolunteer() {
  const [lembagaData, setLembagaData] = useState([]);

  useEffect(() => {
    fetch('http://52.221.202.18/lembaga')
      .then((response) => response.json())
      .then((data) => setLembagaData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {lembagaData.map((lembaga) => (
        <Card
          key={lembaga._id}
          showButton
          backgroundImage={lembaga.gambar}
          name={lembaga.namaLembagaYayasan}
          description={lembaga.overview}
          buttonText="Apply Now"
          buttonPath={`/detailVolunteer/${lembaga._id}`}
        />
      ))}
    </div>
  );
}

export default ListVolunteer;

import React from 'react';
import DetailHewan from '../../Layouts/DetailHewan/DetailHewan';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

function DetailAnimals() {
  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '16rem', paddingTop: '5rem' }}>
        {' '}
        <Navbar />
        <DetailHewan />
      </div>
      <Footer />
    </div>
  );
}

export default DetailAnimals;

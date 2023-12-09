import React from 'react';
import ListCards from '../../Layouts/Listhewan/ListCard';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

function ListAnimals() {
  return (
    <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '16rem', paddingTop: '3rem' }}>
        {' '}
        <Navbar />
        <ListCards />
      </div>
      <Footer />
    </div>

  );
}

export default ListAnimals;

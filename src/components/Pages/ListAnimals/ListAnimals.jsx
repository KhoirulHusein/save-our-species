import React from 'react';
import ListCards from '../../Layouts/Listhewan/ListCard';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

function ListAnimals() {
  return (
    <>
      <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
        <Navbar />
      </div>
      <ListCards />
      <Footer />
    </>

  );
}

export default ListAnimals;

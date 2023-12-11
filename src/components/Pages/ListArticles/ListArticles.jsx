import React from 'react';
import ListArticles from '../../Layouts/ListArticles/Articles';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

function ListAnimals() {
  return (
    <>
      <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
        <Navbar />
      </div>
      <ListArticles />
      <Footer />

    </>
  );
}

export default ListAnimals;

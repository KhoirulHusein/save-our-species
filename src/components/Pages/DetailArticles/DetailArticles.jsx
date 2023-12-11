import React from 'react';
import DetailArticles from '../../Layouts/DetailArticle/DetailArticleMain';
import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';

function DetailArticlePage() {
  return (
    <>
      <div className="bg-gray-900 text-white-A700 font-ubuntu justify-start mx-auto w-full">
        <Navbar />
      </div>
      <DetailArticles />
      <Footer />
    </>
  );
}

export default DetailArticlePage;

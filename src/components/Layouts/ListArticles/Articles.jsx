import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Elements/Card/Card';
import { Button } from '../../Elements/Button/Buttons';
import { Input } from '../../Elements/Form/Input';

const ListArticles = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [visibleData, setVisibleData] = useState(9);
  const apiUrl = 'http://18.141.159.81/article';
  const renderData = data;

  // Fetch API
  useEffect(() => {
    if (searchTriggered) {
      axios.get(`http://18.141.159.81/searcharticle?searchTerm=${searchTerm}`)
        .then((response) => {
          setData(response.data);
        })
        .finally(() => {
          setSearchTriggered(false);
        });
    }
    if (!searchTerm) {
      axios.get(apiUrl)
        .then((response) => {
          setData(response.data);
        });
    }
  }, [searchTriggered, searchTerm]);

  // Limit 9 content at a time
  const handleShowMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 9);
  };

  const handleSearch = () => {
    setSearchTriggered(true); // Setel state untuk menandai bahwa pencarian telah dipicu
  };

  const handleSearchInputChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('./images/articles-banner.jpg')" }}>
        <div className="max-w-md sm:max-w-xs mx-auto pt-36 flex flex-col gap-8 p-4">
          <h1 className="text-center font-bold text-3xl md:text-2xl text-white-A700">Baca Article Hewan Terbaru Diwaktu Senggangmu</h1>
          <div className="search-box flex relative top-28 sm:top-24">
            <Input
              type="search"
              inputWidth="w-full"
              isLabel={false}
              value={searchTerm}
              roundedCorner="rounded-md"
              onChange={handleSearchInputChange}
              className="border-gray-700 p-4 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-light_green-800 focus:border-transparent "
              placeholder="Search here..."
            />
            <Button
              className="absolute right-0 border-gray-700 p-4 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-light_green-800 focus:border-transparent"
              shape="round"
              size="md"
              variant="fill"
              color="light_green_800"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="wrapper bg-gray-900 pt-12">
        <div className="max-w-6xl mx-auto flex flex flex-col gap-8 p-4">
          <div className="container bg-blue_gray-900_02 rounded-md p-4">
            {renderData
              .filter((article) => article.palingAtas === true)
              .slice(0, visibleData)
              .map((article) => (
                // eslint-disable-next-line no-underscore-dangle
                <a href={`http://localhost:3000/artikel/details/${article._id}`}>
                  <div className="container flex sm:flex-col sm:text-center gap-4 mx-auto">
                    <div className="image-container max-w-md">
                      <img className="rounded-md max-w-full max-h-full" src={article.gambarArticle} alt="" />
                    </div>
                    <div className="detail-container flex flex-col gap-6">
                      <div className="headline text-light_green-800 font-bold text-xl sm:text-md xs:text-sm">
                        <h1>{article.judulArticle}</h1>
                      </div>
                      <div className="description flex flex-col gap-2 text-sm text-left max-w-md overflow-hidden h-56 text-white-A700 md:hidden">
                        {article && article.isiArticle ? (
                          article.isiArticle.map((item, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                            <p key={index}>{item}</p>
                          ))
                        ) : (
                          'Loading...'
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}

          </div>
          <div className="listAnimals grid grid-cols-3 sm:max-w-sm md:max-w-xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8 items-stretch sm:text-md xs:text-sm">
            {renderData.slice(0, visibleData).map((article, index) => (
              <Card
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                name={article.judulArticle}
                backgroundImage={article.gambarArticle}
                description={article.isiArticle}
              // eslint-disable-next-line no-underscore-dangle
                idData={`artikel/details/${article._id}`}
                heightImage="pt-40 sm:pt-20"
              />
            ))}
          </div>
          {renderData.length > visibleData && (
          <div className="text-center">
            <Button
              onClick={handleShowMore}
              className="Button bg-light_green-800 text-white-A700 hover:bg-light_green-800"
              shape="round"
              variant="fill"
              color=""
              size="md"
            >
              Show More
            </Button>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListArticles;

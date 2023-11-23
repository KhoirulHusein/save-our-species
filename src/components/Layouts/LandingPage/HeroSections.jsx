/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-children-prop */
import React from 'react';
import Image from '../../Elements/Jumroton/Images';
import Title from '../../Elements/title/Titles';
import SubTitles from '../../Elements/title/SubTitles';
import Button from '../../Elements/Button';

function HeroLanding(props) {
  const { variant } = props;
  return (
    <div className={`${variant}`}>
      <Image source="./images/heroLandingPage.jpg" />
      <div className="container w-2/5 z-10">
        <div className="flex flex-col p-10">
          <Title
            variant="text-3xl font-bold text-[#DDA15E] leading-tight"
            children="Melindungi Keajaiban Terancam"
          />
          <SubTitles
            variants="text-xl py-6"
            childrens="Jelajahi kisah-kisah penuh keajaiban, tantangan, dan harapan yang melibatkan kita semua dalam menjaga keberlanjutan hidup sang raja hutan."
          />
          <Button buttonText="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;

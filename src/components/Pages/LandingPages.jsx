import React from 'react';
import HeroSection from '../Layouts/LandingPage/HeroSections';
import ExploreAnimal from '../Layouts/LandingPage/ExploreAnimals';
import Jumroton from '../Layouts/Jumroton';

function LandingPages() {
  return (
    <div className="bg-black-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="min-h-screen md:px-5 relative w-full">
          <HeroSection />
        </div>
        <ExploreAnimal />
        <Jumroton />
      </div>
    </div>
  );
}

export default LandingPages;

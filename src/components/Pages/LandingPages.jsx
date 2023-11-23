import React from 'react';
import HeroSection from '../Layouts/LandingPage/HeroSections';
import ExploreAnimal from '../Layouts/LandingPage/ExploreAnimals';

function LandingPages() {
  return (
    <>
      <HeroSection variant="flex justify-start items-center h-screen relative" />
      <ExploreAnimal />
    </>
  );
}

export default LandingPages;

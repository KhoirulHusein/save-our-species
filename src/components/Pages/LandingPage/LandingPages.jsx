import React from 'react';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layouts/LandingPage/HeroSections';
import ExploreAnimal from '../../Layouts/LandingPage/ExploreAnimals';
import Jumroton from '../../Layouts/Jumroton';
import Footer from '../../Fragments/Footer/Footer';
import OurJobs from '../../Layouts/LandingPage/OurJobs';
import Volunteer from '../../Layouts/LandingPage/Volunteer';
import Donation from '../../Layouts/LandingPage/Donation';
import Teams from '../../Layouts/LandingPage/Teams';

function LandingPages() {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-ubuntu items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Navbar />
          <div className="h-screen md:px-5 relative w-full">
            <HeroSection />
          </div>
          <ExploreAnimal />
          <Jumroton />
          <OurJobs />
          <Volunteer />
          <Donation />
          <Teams />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPages;

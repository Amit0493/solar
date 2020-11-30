import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from '../cards2'
import HeroSection from '../HeroSection';
import HeroSectionNew from "../heroSectionsNew"
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <HeroSectionNew />
      <Cards displayTitle="Check out our solar products!" />
      <Cards2 displayTitle="Check out our invertor products!" />
      <Footer />
    </>
  );
}

export default Home;

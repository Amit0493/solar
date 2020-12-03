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
      <div style={{ display: "flex" }}>
        <div style={{ minWidth: "50%" }}>
          <img style={{ height: "100%", width: "100%" }} className="backImage" src="images/discuss.png"></img>
        </div>
        <div className="disscussDiv">
          <h3 className="disscussDivHeading">Lets Discuss about your installation</h3>
          <p className="disscussDivDesc">
            We are a team of professional who specialises in solar installation
          </p>
        </div>
      </div>
      <HeroSection />
      <div style={{ padding: "18px", fontFamily: "monospace", color: "darkblue" }}>
        We provide the best solar installation.Consult us before any solar installation. We are commited to serve our customers.
      </div>
      <div style={{ padding: "18px", fontFamily: "monospace", color: "darkblue" }}>
        We provide the cheapest solar installation. Starts at just <span style={{ color: "green" }}>2000 AUD</span>
      </div>
      {/* <HeroSectionNew /> */}
      <Cards displayTitle="Check out our solar products!" />
      <Cards2 displayTitle="Check out our invertor products!" />
      <Footer />
    </>
  );
}

export default Home;

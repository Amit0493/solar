import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from '../cards2'
import HeroSection from '../HeroSection';
import HeroSectionNew from "../heroSectionsNew"
import Footer from '../Footer';
import ProductsCourousel from "../productCourousel";

function Home() {
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <div style={{ minWidth: "50%" }}>
          <img style={{ height: "100%", width: "100%" }} className="backImage" src="images/discuss.png"></img>
        </div>
        <div className="disscussDiv">
          <h3 className="disscussDivHeading">Lets Discuss about your installation</h3>
          <p className="disscussDivDesc">
            We are a team of professional who specialises in solar installation
          </p>
        </div>
      </div> */}
      <HeroSection />
      {/* <div style={{ padding: "18px", fontFamily: "monospace", color: "darkblue" }}>
        We provide the best solar installation.Consult us before any solar installation. We are commited to serve our customers.
      </div>
      <div style={{ padding: "18px", fontFamily: "monospace", color: "darkblue" }}>
        We provide the cheapest solar installation. Starts at just <span style={{ color: "green" }}>2000 AUD</span>
      </div> */}
      {/* <HeroSectionNew /> */}
      {/* <Cards displayTitle="Check out our solar products!" /> */}
      {/* <Cards2 displayTitle="Check out our invertor products!" /> */}
      <div className="homeTable">
        <table id="prices">
          <tbody>
            <tr>
              <td className="popular">
                <div className="pricing-table">
                  <h2>Popular</h2>
                  {/* <h3>Most Popular Package</h3> */}
                  <h4>6.6 KW</h4>
                  <h5>Save up to $2200 p.a on electricity* </h5>
                  <p>Ideal for family size of 5 to 7 people</p>
                  <p>Tier 1 Solar Module</p>
                  <p>5 KW Power Inverter</p>
                  <p>6600w Tier 1 Panels</p>
                  <p>Generates 25 kWh/day</p>
                  {/* <p>High Efficiency Solar Module</p> */}
                  <a href="#">Request Quote</a>
                </div>
              </td>
              <td>
                <div className="pricing-table">
                  <h2>Value for Money</h2>
                  <h4> 9.9 KW</h4>
                  <h5>Save up to $3200 p.a on electricity*</h5>
                  <p>Larger homes and small businesses</p>
                  <p>Tier 1 Solar Module</p>
                  <p>7.5 KW Power Inverter</p>
                  <p>9,990w Tier 1 Panels</p>
                  <p>Generates 38 kWh/day</p>
                  {/* <p>High Efficiency Solar Module</p> */}
                  <a href="#">Request Quote</a>
                </div>
              </td>

              <td>
                <div className="pricing-table">
                  <h2 style={{ background: "#54216a" }}>Medium Size System</h2>
                  <h4 style={{ background: "#8139a7" }} >5 KW</h4>
                  <h5 style={{ background: "#a867cb" }} >Save up to $1650 p.a on electricity*</h5>
                  <p>Ideal for family size of 3 to 5 people</p>
                  <p>Tier 1 Solar Module</p>
                  <p>5 KW Power Inverter</p>
                  <p>5000w Tier 1 Panels</p>
                  <p>Generates  21 kWh/day</p>
                  {/* <p>High Efficiency Solar Module</p> */}
                  <a href="#">Request Quote</a>
                </div>
              </td>

              <td>
                <div className="pricing-table">
                  <h2>Small Size System</h2>
                  <h4>3 KW</h4>
                  <h5>Save up to $1000 p.a on electricity*</h5>
                  <p>Ideal for family size of 2 to 3 people</p>
                  <p>Tier 1 Solar Module</p>
                  <p>3 KW Power Inverter</p>
                  <p>3000w Tier 1 Panels</p>
                  <p>Generates 12.6 kWh/day</p>
                  {/* <p>High Efficiency Solar Module</p> */}
                  <a href="#">Request Quote</a>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <ProductsCourousel></ProductsCourousel>
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import AboutProcess from "./aboutProcess";
class AboutUs extends React.Component {

  render() {
    return (
      <div>
        {/* <div className="product-navbar">
          <div className="product-navbar-centered">
            <ul>
              <li>
                <a href="#" className>
                  <span>
                    LINK
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className>
                  LINK
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <header className="hero" role="banner">
          <div className="container">
            <div className="navbar-header">
              <a href="#" className="navbar-brand">
                <p>
                  <img src="https://apimatic-io-cdn.azureedge.net/img/theme/ApimaticLogo.svg" />
                  SUNPARK SOLAR
                </p>
              </a>
            </div>
          </div>
        </header> */}
        <div id="about-main">
          <div className="jumbotron">
            <div className="jumbotron-inner">
              <div className="top-box">
                <div className="content-box">
                  <h1>
                    About  SUNPARK SOLAR
                  </h1>
                  <p>
                    Sunpark solar is an Australian establishment company  that provides renewable energy products.<br /> Our mission is to deliver top quality solar products and battery installations to australians.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="img-layer-container"> */}
            {/* <div className="team-image" id="team-image">
                <img src="images/SolarS.jpg" />
              </div> */}
            {/* <div className="circles-container">
                <div className="img-1">
                  <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" />
                </div>
                <div className="img-2">
                  <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" />
                </div>
              </div> */}
            {/* </div> */}
            <AboutProcess></AboutProcess>
          </div>
          <div className="story-container">
            {/* <div className="need-for-dx-container">
              <h3 className="text-center">
                Need for DX
              </h3>
              <p>
                Application Programming Interfaces (APIs) have taken the world by storm and are now the de facto standard of software communication. Almost every software product nowadays consumes APIs. The business model of numerous companies around the world relies upon the consumption of their APIs. API providers, therefore, strive to increase API adoption rates by spending millions of dollars every year to improve developer experience. This is usually done by providing Software Development Kits (SDKs) and API documentation to developer consuming their API(s). Developing SDKs and writing documentation, however, are arduous, monotonous and error-prone tasks. It is a slow process and costs a lot of time and money.
              </p>
              <div className="img-container">
                <img src="https://apimatic.io/img/theme/aboutUs/dxFlow.svg" alt="apimatic developer experience process" className="img-responsive" />
              </div>
            </div> */}
            <div className="container-divider" />
            <div className="our-tech-container">
              <h3 className="text-center">
                Our Aim
              </h3>
              <p>
                We tailor your solar systems according to your electricity usage. We offer solar installations to both residential and commercial. Our aim is to help customers by saving them from shocking electricity bills and contribute towards green environment.
              </p>
              {/* <div className="img-container">
                <img src="https://apimatic.io/img/theme/cgaasIcons/cgaasProcess.gif" alt="apimatic code generation engine" className="img-responsive" />
              </div> */}
            </div>
            <div className="container-divider" />
            {/* <div className="origin-story-container">
              <h3 className="text-center">
                Origin Story
              </h3>
              <p>
                While doing research work for their PhDs from the University of Auckland in 2014, our founders came across one of the API industry's pain points: SDKs. They realized that API providers who spent hundreds of thousands of dollars every year on improving developer experience, by providing SDKs and user-friendly documentation were able to reach a wider developer audience for their APIs compared to API providers who weren't able to do so.
              </p>
              <p>
                It was so clear that even though writing SDKs and documentation was a difficult and expensive task, it followed repeatable patterns which could be defined as logic blocks in a code generation engine. So, as a research project, they started working on a code generation engine which dynamically generated SDKs using API description as input.
              </p>
              <p>
                After a rigorous journey, this research project was selected as a candidate for commercialization by Return on Science (a NZ national research commercialization program focused on bringing new academic research to market) and the concept was transformed into a product i.e. APIMatic.
              </p>
            </div> */}
            <div className="container-divider" />
            <div className="today-container">
              <h3 className="text-center">
                Why US:-
              </h3>
              {/* <p>
                APIMatic has come a long way since its inception 3 years ago. Having started with only generating SDKs, APIMatic now provides solutions in other areas of developer experience as well. Presently, APIMatic is used by numerous organizations around the world to:
              </p> */}
              <ul>
                <li>Clean Energy Council member </li>
                <li>Free consultation and quotations </li>
                <li>Tier 1 CEC approved products </li>
                <li>10 year workmanship warranty </li>
                <li>Competitive price and quality installation</li>
              </ul>
            </div>
            <div className="container-divider" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AboutUs

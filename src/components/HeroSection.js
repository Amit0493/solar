import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img style={{ height: "100%", width: "100%" }} className="backImage" src="images/home.jpg"></img>
      {/* <h1>ADVENTURE AWAITS</h1> */}
      {/* <p>What are you waiting for?</p> */}
      <div className='hero-btns'>

        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get Quote
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
      <div className=" callNowImage">
        <div>
          <img style={{ height: "40px", width: "50px" }} src="images/call.svg"></img>
        </div>
        <div>
          <p>Call our solar specialist</p>
          <p>1300755059 </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

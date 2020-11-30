import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSectionNew() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <img style={{ height: "50%", width: "50%" }} className="backImage" src="images/panel.png"></img>
            <h1 style={{ width: "40%", position: "absolute", left: "30px", fontSize: "50px", top: "20px", "marginTop": "0" }}>AEnergize the future
with solar power.</h1>
            <p style={{ width: "40%", position: "absolute", left: "30px", fontSize: "24px", "marginTop": "0" }}>Sun Current Residential combines our intelligence in building products, building sciences and energy efficient innovations with a team of assessors, engineers and qualified contractors to provide businesses and property owners with the most effective energy saving solutions.</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Get Quote
        </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Call Us <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSectionNew;

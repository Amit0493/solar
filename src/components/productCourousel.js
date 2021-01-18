import React from 'react';
// import '../../App.css';
// import Marquee from "react-double-marquee";
import CarouselSlider from "react-carousel-slider";

export default function ProductsCourousel() {

    let data = [
        {
            imgSrc: "images/risen1.png"
        },
        {
            imgSrc: "images/abb1.png"
        },
        {
            imgSrc: "images/fronius.png"
        },
        {
            imgSrc: "images/goodwe1.png"
        },
        {
            imgSrc: "images/jinko1.png"
        },
        {
            imgSrc: "images/longisolar.png"
        },
        {
            imgSrc: "images/qcells1.png"
        },
        {
            imgSrc: "images/seraphim1.png"
        },
        {
            imgSrc: "images/sma1.png"
        },
        {
            imgSrc: "images/solaredge1.png"
        },
        {
            imgSrc: "images/suntech1.jpg"
        }
    ];

    let textBoxStyle = {
        // textAlign: "left"
        width: "100%"
        // , background: "transparent"
        // , fontSize: "36px"
        // , fontWeight: 300
    };



    let itemsStyle = {
        // ,height: "100%", padding: "0px"
        // , padding: "15px"
        // , background: "#FFCA28"
        // , borderRadius: "4px"
        // , margin: "0px 0px", padding: "0px"
        width: "170px",
        margin: " 0px 10px",
        height: "100px"
    };

    let sliderBoxStyle = {
        height: "130px"
        //, width: "200px"
        // , background: "tranparent"
    };

    let buttonSetting = {
        placeOn: "middle-inside"
        , hoverEvent: false,
        style: {
            left: {
                margin: "0px 0px 0px 10px"
            },
            right: {
                margin: "0px 10px 0px 0px"
            }
        }
    };

    let manner = {
        autoSliding: { interval: "1.5s" }
        , duration: "0.3s"
    };

    return (
        <React.Fragment>
            <CarouselSlider
                slideItems={data}
                manner={manner}
                buttonSetting={buttonSetting}
                sliderBoxStyle={sliderBoxStyle}
                itemsStyle={itemsStyle}
                textBoxStyle={textBoxStyle}
            />
        </React.Fragment>
    );
}

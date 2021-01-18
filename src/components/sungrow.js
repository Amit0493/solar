import React from 'react';
import Footer from "./Footer";
class SunGrow extends React.Component {

    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/price.pdf';
        link.download = 'file.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/sungrow.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/sungrow.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Sungrow Power Supply Co., Ltd. a high-tech enterprise engaged in development of power supply equipment for renewable energy especially solar PV and wind power, provides grid-connected PV inverter, wind power converter, technical consultancy, system design and other relevant services.Founded in 1997 by Dr. Renxian Cao, Sungrow has become one of the leading manufacturers in the world PV inverter industry. We have 1000 employees all aroundthe world, of which over 30% are R&D engineers, representative offices and branch companies in France, Italy, Germany, Canada, Australia and other countries.Identified as one of The most Famous Trademark in China, Sungrow was officially listed (sym:300274) on the Shenzhen Stock Exchange in November 2011, and listed Top 9 of The Most Potential Chinese Public Company by Forbes in 2012. With over 1500MW installation capacity globally, of which 400MW is installed in Europe,Sungrow is the largest PV inverter manufacturer of Asia, and commented as "Chinese Sturdiness" by Photon Magazine.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>High Yield</span><br /> Higher yield with Max. efficiency 98.4 %, European efficiency 98.0 % and flexible PV string configurations, DC/AC ratio up to 1.3.
 </li>
                            <li><span>Smart Management</span><br /> Easy local and online monitoring via App or Web and export power control with Sungrow energy meter </li>
                            <li><span>Safe and Durable</span><br /> Build-in surge arresters and residual current protection and high anti-corrosion with aluminum alloy die casting </li>
                            <li><span>Easy and User Friendly</span><br />11.5 kg compact design, plug and play installation and fast commissioning via LCD</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SunGrow

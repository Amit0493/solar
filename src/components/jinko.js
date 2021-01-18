import React from 'react';
import Footer from "./Footer";
class Jinko extends React.Component {
    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'http://localhost:3000/images/price.pdf';
        link.download = 'file.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/jinko.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/jinko.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            JinkoSolar (NYSE: JKS) is one of the largest and most innovative solar module manufacturers in the world.JinkoSolar distributes it solar products and sells its solutions and services to a diversified international utility, commercial, and residential customer base in China, the United States, Japan, Germany, the United Kingdom, Chile, South Africa, India, Mexico, Brazil, the United Arab Emirates, Italy, Spain, France, Belgium, and other countries and regions. JinkoSolar has built a vertically integrated solar product value chain, with an integrated annual capacity of 10.5 GW for silicon wafers, 7.4 GW for solar cells, and 12.6 GW for solar modules, as of June 30, 2019.JinkoSolar has over 15,000 employees across its 7 production facilities globally, 15 overseas subsidiaries in Japan, Korea, Singapore, India, Turkey, Germany, Italy, Switzerland, United States, Canada, Mexico, Brazil, Chile, Australia, and United Emirates, and global sales teams in China, United Kingdom, France, Netherlands, Spain, Bulgaria, Greece, Romania, Ukraine, Jordan, Saudi Arabia, Tunisia, Egypt, Morocco, Nigeria, Kenya, South Africa, Costa Rica, Colombia, Panama, and Argentina.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>5 Busbar Solar Cell,</span> It adopts new technology to improve the efficiency of modules , offers a better aesthetic appearance, making it perfect for rooftop installation.
 </li>
                            <li><span>High Efficiency,</span> Higher module conversion efficiency (up to 20.17%) benefit from Passivated Emmiter Rear Contact (PERC) technology. </li>
                            <li><span>PID Resistance,</span> Excellent Anti-PID performance guarantee limited power degradation for mass production. </li>
                            <li><span>Low-light Performance, </span>Advanced glass and surface texturing allow for excellent performance in low-light environment. </li>
                            <li><span>Severe Weather Resilience, </span>Certified to withstand: wind load (2400 Pascal) and snow load (5400 Pascal).</li>
                            <li><span>Durability Against Extreme Environmental Conditions,</span> High salt mist and ammonia resistance certified by TUV NORD.</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Jinko

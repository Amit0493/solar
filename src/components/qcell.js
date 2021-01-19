import React from 'react';
import Footer from "./Footer";
class Qcell extends React.Component {

    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/qcell2.pdf';
        link.download = 'qcell.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/qcell.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/qcell.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Hanwha Q CELLS Co. Ltd. (NASDQ: HQCL) isone of the world’s largest and most recognized photovoltaic (PV) manufacturersfor its high-performance, high-quality solar cells and modules.Hanwha Q CELLS is a flagship company ofHanwha Group, a FORTUNE Global 500 firmand8thlargest conglomerate with over 65 years of history in SouthKorea.Q CELLS’ modules are built for Australia’s harsh environmental conditions of Australia, such as cyclone and desert climates. As of the end of 2016, Hanwha Q CELLS supplied over 10% of solar modules installed in Australia, making it the top PVmodule supplier in the country.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Q.ANTUM TECHNOLOGY: LOW LEVELISED COST OF ELECTRICITY</span><br /> Higher yield per surface area, lower BOS costs, higher power classes, and an efficiency rate of up to 20.4 %.
 </li>
                            <li><span>INNOVATIVE ALL-WEATHER TECHNOLOGY</span><br /> Optimal yields, whatever the weather with excellent low-light and temperature behaviour. </li>
                            <li><span>ENDURING HIGH PERFORMANCE</span><br /> Long-term yield security with Anti LID Technology, Hot-Spot Protect and Traceable Quality Tra.QTM. </li>
                            <li><span>EXTREME WEATHER RATING</span><br />High-tech aluminium alloy frame, certified for high snow (5400 Pa) and wind loads (4000 Pa).</li>
                            <li><span>A RELIABLE INVESTMENT </span><br />Inclusive 12-year product warranty and 25-year linear performance warranty1.</li>
                            <li><span>STATE OF THE ART MODULE TECHNOLOGY</span><br /> Q.ANTUM DUO combines cutting edge cell separation
and innovative 12-busbar design with Q.ANTUM Technology.</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Qcell

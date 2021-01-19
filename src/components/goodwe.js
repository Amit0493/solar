import React from 'react';
import Footer from "./Footer";
class GoodWe extends React.Component {
    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/goodwe2.pdf';
        link.download = 'goodwe.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }


    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/goodwe.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/goodwe.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            GoodWe is a leading, strategically-thinking enterprise which focuses on research andmanufacturing of PV inverters and energy storage solutions. With 12 GW installed in more than 100 countries, GoodWe solar inverters have been largely used in residential, commercial rooftops, industrial and utility scale systems, ranging from 0.7 to 80kW.GoodWe's philosophy is to always create win-win partnerships with customers by identifying and integrating the most advanced components and techniques availablewhile offering an unparalleled after-sales service. TÜV Rheinland, the great provider of technical services worldwide, awarded GoodWe as the winner of "All Quality Matters Award" for 4 consecutive years, for both its outstanding on-grid and storage solutions. <br /><br />In 2019, GoodWe has been awarded the 2019 Top Brand PV seal for the Australian Market, as announced by independent market research specialist EuPD Research. The survey analyzes brand perception, service & support, preferred customer choice and distribution in global markets in order to identify the inverter brand which distinguishes itself from the rest in the perception of their customers.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Wide MPPT Range</span><br />
                            </li>
                            <li><span>Wireless monitoring</span><br /> </li>
                            <li><span>33% DC Oversizing</span><br /> </li>
                            <li><span>High Efficiency 97.8%</span><br /></li>
                            <li><span>Multi-monitoring Method WiFi , RS485, LAN</span><br /></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default GoodWe

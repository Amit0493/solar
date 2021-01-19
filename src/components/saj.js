import React from 'react';
import Footer from "./Footer";
class Saj extends React.Component {

    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/saj2.pdf';
        link.download = 'saj.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }


    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/saj.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/saj.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Guangzhou Sanjing Electric Co., LTD (SAJ) is a state-level high-tech enterprise specially focusing on renewable energy conversion, transmission and storage solutions, dedicating to establish itself as a service provider of digital building energymanagement. Established in 2005, SAJ has a strong R&D and technical service team;in total 1520 employes located in China, Belgium, India, and Australia. <br /><br />SAJ solar products include grid-tied solar inverter, storage solar inverter, all-in-one battery solution and monitoirng platform. SAJ inverters have been awarded the Top 10 solar inverter brand in China for five consecutive years, and also become global Top 10 residential inverter in 2018. <br /><br />SAJ’s R5-10K-T2 and Suntrio Plus 33K inverters achieved “All Quality Matters” Award by TUV Rheinland, which proves high quality and reliability of SAJ solar inverters.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Lightning protection</span><br />
                            </li>
                            <li><span>High precision leakage monitoring</span><br /> </li>
                            <li><span>Die-casting case cover , Beautiful & reliable</span><br /> </li>
                            <li><span>Low standby consumption</span><br /></li>
                            <li><span>High efficiency, high yield</span><br /></li>
                            <li><span>Bluetooth APP connection</span><br /></li>
                            <li><span>All data at real time</span><br /></li>
                            <li><span>Remote Maintenance and Remote Configuration</span><br /></li>
                            <li><span>Quiet generation and no noise pollution</span><br /></li>
                            <li><span>Intelligent & Grid-friendly</span><br /></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Saj

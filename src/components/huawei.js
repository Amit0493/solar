import React from 'react';
import Footer from "./Footer";
class Huawei extends React.Component {
    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/huwaei2.pdf';
        link.download = 'huwaei.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/huawei.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/huawei.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Huawei is a global leader of ICT solutions. Continuously innovating based on customer needs, enhancing customer experiences and creating customer values. In 2016, Huawei's sales revenue is estimated at USD74.9 billion, a year on year increase of 32%. Huawei Smart PV Solutions are widely developed worldwide. According to HIS & GTM, Huawei ranks No.1 on terms of inverter global shipment. <br /><br />As of December 31, 2016, Huawei has about 180,000 employees. Of the headcount, 45% or about 80,000 employees are specialized in R&D; 71% of the employees working overseas are local recruits.<br /><br />• Huawei has 12 Regional Headquarters, 15 R&D institute and centers, 36 joint innovation centers and 45 training centers worldwide. Products and solutions are applied in over 170 countries and regionsworldwide.
                            <br /><br />• As of December 31, 2016, Huawei has filed a total of 57,632 patent applications in China and 39,613 patent applications outside of China. A total of 62,519 patent applications have been granted.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Active Safety</span><br /> AI Powered Active Arcing Protection.
                            </li>
                            <li><span>Higher Yields</span><br /> </li>Upto 30% more energy with optimizer.
                            <li><span>2x Power Battery Ready</span><br /> 5KW AC Output plus , 5KW Battery Charge</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Huawei

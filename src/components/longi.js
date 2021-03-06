import React from 'react';
import Footer from "./Footer";
class Longi extends React.Component {

    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/longi2.pdf';
        link.download = 'longi.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/longinew.jpg' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Founded in 2000, LONGi Green Energy Technology Co.Ltd. is the largest mono crystal manufacturer in the world. It provides high quality products and services for photovoltaic and semiconductor industry. Since established in 2014, LONGi devotes itself to R&D and manufacturing of high efficiency mono solar cells and modules.LONGi Solar mono module products are highly efficient and reliable, they are proven to have an average cell efficiency rate of 21%. The most advanced module manufacturing technologies are applied to get lower LCOE (Levelized Cost of Energy), excellent performance at Light Induced Degradation (LID) and to ensure thepower generation and investment revenue for customers.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Positive power tolerance</span> (O ~ +SW) guaranteed </li>
                            <li><span>High module conversion efficiency</span> (up to 20.9%) </li>
                            <li><span>Slower power degradation enabled</span> by Low LID Mono PERC technology: first year "less than 2%", 0.55% year 2-25 </li>
                            <li><span>Solid PID resistance </span>ensured by solar cell process optimization and careful module BOM selection </li>
                            <li><span>Reduced resistive loss </span>with lower operating current</li>
                            <li><span>Higher energy yield</span> with lower operating temperature</li>
                            <li><span>Reduced hot spot risk </span>with optimized electrical design and lower operating current</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Longi

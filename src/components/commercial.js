import React from 'react';
import Footer from "./Footer";
import Content2 from "./content2";
class Residential extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div >
                    <div style={{ minHeight: "400px" }} className="residentialCOnatiner">
                        <img height="400px" width="100%" src='images/solarblue2.jpg' />
                        <div className="priceCOnatiner" style={{ backgroundColor: "#171cd21c" }}>
                            <h2> Swipe to Sunpark Solar</h2>
                            <h4>High quality solat at unbeatable prices</h4>
                            <ul class="checkmark">
                                <li>Easy payment options available</li>
                                <li>ZERO deposit installation</li>
                                <li>100% Australian owned and operated</li>
                            </ul>
                        </div>
                        <div className="councilCOnatiner">
                            <img height="100px" width="100px" src='images/council.svg' />
                        </div>
                    </div>
                    <Content2></Content2>
                    <table id="prices">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="pricing-table">
                                        <h2>Small Buisness</h2>
                                        <h4> 15 KW</h4>
                                        {/* <h5>Save up to $3200 p.a on electricity*</h5> */}
                                        <p>Suiteable for low energy usage</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>15 KW Power Inverter</p>
                                        <p>15000w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td className="popular">
                                    <div className="pricing-table">
                                        <h2>Popular</h2>
                                        {/* <h3>Most Popular Package</h3> */}
                                        <h4>30 KW</h4>
                                        {/* <h5>Save up to $2200 p.a on electricity* </h5> */}
                                        <p>Suiteable for medium energy usage</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>30 KW Power Inverter</p>
                                        <p>30000w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="pricing-table">
                                        <h2 style={{ background: "#54216a" }} >Industrial</h2>
                                        <h4 style={{ background: "#8139a7" }}>50 KW</h4>
                                        {/* <h5>For commercial energy use</h5> */}
                                        <p>Suiteable for commercial energy use</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>50 KW Power Inverter</p>
                                        <p>50000w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="pricing-table">
                                        <h2>Solar Plant</h2>
                                        <h4>100 KW</h4>
                                        {/* <h5>For larger business energy use</h5> */}
                                        <p>Suiteable for larger business energy use</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>100 KW Power Inverter</p>
                                        <p>100000w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Residential

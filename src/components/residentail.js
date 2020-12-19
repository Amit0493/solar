import React from 'react';
import Footer from "./Footer";
import Content from "./content";
class Commercial extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div >
                    <div style={{ minHeight: "400px" }} className="residentialCOnatiner">
                        <img height="400px" width="100%" src='images/solarBlack.jpg' />
                        <div className="priceCOnatiner">
                            <h2> Swich to SunPark Solar</h2>
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
                    <Content></Content>
                    <table id="prices">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="pricing-table">
                                        <h2>Value for Money</h2>
                                        <h4> 9.9 KW</h4>
                                        <h5>Save up to $3200 p.a on electricity*</h5>
                                        <p>Larger homes and small businesses</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>7.5 KW Power Inverter</p>
                                        <p>9,990w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td className="popular">
                                    <div className="pricing-table">
                                        <h2>Popular</h2>
                                        {/* <h3>Most Popular Package</h3> */}
                                        <h4>6.6 KW</h4>
                                        <h5>Save up to $2200 p.a on electricity* </h5>
                                        <p>Tier 1 Solar Module</p>
                                        <p>5 KW Power Inverter</p>
                                        <p>6000w Tier 1 Panels</p>
                                        <p>High Efficiency Solar Module</p>
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="pricing-table">
                                        <h2>Small Commercial</h2>
                                        <h4>15 KW</h4>
                                        <h5>For low-medium commercial energy use</h5>
                                        <p>Tier 1 Solar Module</p>
                                        <p>15 KW Power Inverter</p>
                                        <p>15000w Tier 1 Panels</p>
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

export default Commercial;

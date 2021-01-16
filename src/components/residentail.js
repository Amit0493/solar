import React from 'react';
import Footer from "./Footer";
import Content from "./content";
class Commercial extends React.Component {

    render() {
        const textCol = "#21a179"
        return (
            <React.Fragment>
                <div >
                    <div style={{ minHeight: "400px" }} className="residentialCOnatiner">
                        <img height="400px" width="100%" src='images/solarblue1.jpg' />
                        <div className="priceCOnatiner">
                            <h2> Swipe to Sunpark Solar</h2>
                            <h4>High quality solar at unbeatable prices</h4>
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
                                <td className="popular">
                                    <div className="pricing-table">
                                        <h2>Popular</h2>
                                        {/* <h3>Most Popular Package</h3> */}
                                        <h4>6.6 KW</h4>
                                        <h5>Save up to $2200 p.a on electricity* </h5>
                                        <p>Ideal for family size of 5 to 7 people</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>5 KW Power Inverter</p>
                                        <p>6600w Tier 1 Panels</p>
                                        <p>Generates 25 kWh/day</p>
                                        {/* <p>High Efficiency Solar Module</p> */}
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="pricing-table">
                                        <h2>Value for Money</h2>
                                        <h4> 9.9 KW</h4>
                                        <h5>Save up to $3200 p.a on electricity*</h5>
                                        <p>Larger homes and small businesses</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>7.5 KW Power Inverter</p>
                                        <p>9,990w Tier 1 Panels</p>
                                        <p>Generates 38 kWh/day</p>
                                        {/* <p>High Efficiency Solar Module</p> */}
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>

                                <td>
                                    <div className="pricing-table">
                                        <h2 style={{ background: "#54216a" }}>Medium Size System</h2>
                                        <h4 style={{ background: "#8139a7" }} >5 KW</h4>
                                        <h5 style={{ background: "#a867cb" }} >Save up to $1650 p.a on electricity*</h5>
                                        <p>Ideal for family size of 3 to 5 people</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>5 KW Power Inverter</p>
                                        <p>5000w Tier 1 Panels</p>
                                        <p>Generates  21 kWh/day</p>
                                        {/* <p>High Efficiency Solar Module</p> */}
                                        <a href="#">Request Quote</a>
                                    </div>
                                </td>

                                <td>
                                    <div className="pricing-table">
                                        <h2>Small Size System</h2>
                                        <h4>3 KW</h4>
                                        <h5>Save up to $1000 p.a on electricity*</h5>
                                        <p>Ideal for family size of 2 to 3 people</p>
                                        <p>Tier 1 Solar Module</p>
                                        <p>3 KW Power Inverter</p>
                                        <p>3000w Tier 1 Panels</p>
                                        <p>Generates 12.6 kWh/day</p>
                                        {/* <p>High Efficiency Solar Module</p> */}
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

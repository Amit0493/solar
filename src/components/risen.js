import React from 'react';
import Footer from "./Footer";
class Risen extends React.Component {
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
                        <img height="400px" width="100%" src='images/risen.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/risen.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Risen Energy is a leading, global tier 1 manufacturer of high-performance solar photovoltaic products and provider of total business solutions for residential, commercial and utility-scale power generation. The company, founded in 1986, and publicly listed in 2010, compels value generation for its chosen global customers. Techno-commercial innovation, underpinned by consummate quality and support, encircle Risen Energy's total Solar PV business solutions which are among the most powerful and cost-effective in the industry. With local market presence and strong financial bankability status, Risen are committed, and able, to building strategic, mutually beneficial collaborations with our partners, as together Risen Energy capitalise on the rising value of green energy.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>Global Tier 1 bankable brand with independently verified state of the are automated manufacturing</span>
                            </li>
                            <li><span></span> Industry leader lowest thermal co-efficient power  </li>
                            <li><span></span> 15 year warranty for rooftop mounted PV system </li>
                            <li><span></span>excellent low irradiance performance</li>
                            <li><span> </span>excellent pid resistence</li>
                            <li><span> </span>Positive power tolerance</li>
                            <li><span> </span>Dual stage 100% EL inspection warranting defect free product</li>
                            <li><span> </span>Warranty reliability and stringent quality assurances well beyond certified requirements</li>

                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Risen

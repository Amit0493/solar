import React from 'react';
import Footer from "./Footer";
class Suntech extends React.Component {

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
                        <img height="400px" width="100%" src='images/suntech.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/suntech.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Suntech, as a famous solar photovoltaic manufacturer in the world, is engaged in theR & D and the production of crystalline silicon solar cells and modules. Founded in 2001, the Company has its sales areas spread all over more than 80 countries and regions in the world. The Company is always devoted to promotion of the conversion efficiency of products, continuously enhances the R & D of new technologies, improves the manufacturing techniques, and wholeheartedly provides photovoltaic products with high quality, high reliability and high cost performance for customers by virtue of the state-of-the-art technical advantages and the excellent manufacturing level.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>High power output</span><br /> Compared to normal module, the power output can increase 2% 5W-10W
 </li>
                            <li><span>Excellent weak light performance</span><br /> More power output in weak light condition, such as haze, cloudy, and morning </li>
                            <li><span>Extended load tests</span><br /> Module certified to withstand front side maximum static test load (5400 Pascal) and rear side maximum static test loads (3800 Pascal) * </li>
                            <li><span>Suntech current sorting process</span><br />System output maximized by reducing mismatch losses up to 2% with modules sorted & packaged by amperage</li>
                            <li><span>Lower operating temperature </span><br />Lower operating temperature and temperature coefficient increases the power output</li>
                            <li><span>Withstanding harsh environment</span><br /> Reliable quality leads to a better sustainability even in harsh environment like desert, farm and coastline</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Suntech

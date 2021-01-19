import React from 'react';
import Footer from "./Footer";
class Fronious extends React.Component {

    downloadDetail = () => {
        console.log(" download pff ");
        var link = document.createElement('a');
        link.href = 'images/fronius2.pdf';
        link.download = 'fronius.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ padding: "20px" }}>
                    {/* <div>
                        <img height="400px" width="100%" src='images/fronis.png' />
                    </div> */}
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <img className="productImage" height="400px" width="50%" src='images/fronis.png' />
                        <div className="productDownloadBtn" style={{ width: "45%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <button onClick={this.downloadDetail}> Download Pdf</button>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <p>
                            Fronius is a European company that was established by founder Günter Fronius in Austria in 1945. Fronius make some of the best inverters in the world. In late 2010, Fronius opened its Australian office based in Melbourne where it not only provides customer service and technical assistance, but also offers product demonstrations and training courses.
                    </p>
                    </div>
                    <div className="today-container" style={{ marginTop: "20px" }}>
                        <h3 className="text-center">
                            Important features:-
                    </h3>
                        <ul>
                            <li><span>SnapINverter mounting system</span><br />
                            </li>
                            <li><span>Wireless monitoring</span><br /> </li>
                            <li><span>Open data communication</span><br /> </li>
                            <li><span>Smart Grid Ready</span><br /></li>
                            <li><span>Arc Fault Circuit Interruption</span><br /></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Fronious

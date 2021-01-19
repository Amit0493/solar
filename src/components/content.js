import React from "react";
const Content = (props) => {
    const textCol = "#27476E"
    return (
        <div style={{ padding: '20px' }}>
            <div id="infostrip" ><h3 style={{ color: textCol, textDecoration: "underline" }}>Latest products with advanced technology</h3>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "40px", marginRight: "10px" }} src='images/quality.svg' />
                    <p className="centerParagraph" > We offer latest Tier 1 products available in market.</p>
                </div>
            </div>
            <div id="infostrip" ><h3 style={{ color: textCol, textDecoration: "underline" }}>CEC approved member</h3>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "40px", marginRight: "10px" }} src='images/cec.jpg' />
                    <p className="centerParagraph" > Sunpark Solar is a reliable solar provider. We are a member of clean energy council and follow all guidelines while installing a system.</p>
                </div>
            </div>
            <div id="infostrip" ><h3 style={{ color: textCol, textDecoration: "underline" }} >25 years guaranteed Performance</h3>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "40px", marginRight: "10px" }} src='images/milli.png' />
                    <p className="centerParagraph" > Sunpark Solar offers Tier 1 products that comes with 25 year of warranty.</p>
                </div>
            </div>
            <div id="infostrip" ><h3 style={{ color: textCol, textDecoration: "underline" }} >Flexible payment option available</h3>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "40px", marginRight: "10px" }} src='images/money.png' />
                    <p className="centerParagraph" > No upfront cost, No problem. Sunpark Solar offers payment plans starting from $0 deposit.</p>
                </div>
            </div>
            <div id="infostrip" ><h3 style={{ color: textCol, textDecoration: "underline" }} >Expert helpline </h3>
                <div style={{ display: "flex" }}>
                    <img style={{ height: "40px", width: "40px", marginRight: "10px" }} src='images/phone-call.png' />
                    <p className="centerParagraph" > Sunpark Solar has a dedicated line to answer all your queries.</p>
                </div>
            </div>
            <div id="infostrip" ><h3 style={{ fontSize: "30px", color: '#FFBC0A', textDecoration: "underline", textAlign: "center", marginTop: "24px" }} >Residential Packages </h3>
            </div>
            <div id="infostrip" ><h3 style={{ fontSize: "18px", marginTop: "10px" }} >Sunpark Solar determines your system size according to your electricity consumption. We evaluate your yearly electricity bills; household needs and then advise best system for your house. </h3>
            </div>

            {/* <div id="infostrip" style={{ background: '#7d5056f7' }}><h1>CEC approved installer<hr /></h1>
                <svg className="icon icon-fire"><use xlinkHref="#icon-fire"><symbol id="icon-fire" viewBox="0 0 32 32">
                    <title>fire</title>
                    <path d="M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z" />
                </symbol></use></svg>
                <p> We are a trusted and reliable solar energy provider. Arise Solar is a Clean Energy Council approved member.</p>

            </div> */}
            {/* <div id="infostrip" style={{ background: '#7d5056f7' }}><h1>CEC approved installer<hr /></h1>
                <svg className="icon icon-fire"><use xlinkHref="#icon-fire"><symbol id="icon-fire" viewBox="0 0 32 32">
                    <title>fire</title>
                    <path d="M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z" />
                </symbol></use></svg>
                <p> We are a trusted and reliable solar energy provider. Arise Solar is a Clean Energy Council approved member.</p>

            </div> */}
        </div>
    )
}

export default Content;

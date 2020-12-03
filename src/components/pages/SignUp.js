import React from 'react';
import '../../App.css';
import Footer from "../Footer";

export default function SignUp() {
  return (
    <div>
      <div className="contactWrapper setBackGround">
        <div>
          We are resgistered with the australian government. We provide the best services for solar installation.Our ABN number is 1200755059
        </div>
        <div className="contactWrapperContainer">
          <div className="disscussDivHeading">
            <img style={{ height: "20px", width: "20px", marginRight: "8px" }} src="images/location.svg" /> Address:-
        </div>
          <p className="disscussDivDesc">
            Suite 1203, 1 Queens Rd, Melbourne Vic 3004
        </p>
        </div>
        <div className="contactWrapperContainer">
          <div className="disscussDivHeading">
            <img style={{ height: "20px", width: "20px", marginRight: "8px" }} src="images/phone.svg" /> Lets Talk:-
        </div>
          <p className="disscussDivDesc">
            69169754670
        </p>

        </div>
        <div className="contactWrapperContainer">
          <div className="disscussDivHeading">
            <img style={{ height: "20px", width: "20px", marginRight: "8px" }} src="images/chat.svg" /> General  Support:-
        </div>
          <p className="disscussDivDesc">
            admin@sunparksolar.com.au
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

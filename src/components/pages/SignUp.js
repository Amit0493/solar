import React from 'react';
import '../../App.css';
import Footer from "../Footer";

export default function SignUp() {
  return (
    <div>
      {/* <div className="contactWrapper setBackGround">
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
      </div> */}
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <img src="images/img-01.png" alt="IMG" />
          </div>

          <form class="contact1-form validate-form">
            <span class="contact1-form-title">
              Get in touch
				</span>

            <div class="wrap-input1 validate-input" data-validate="Name is required">
              <input class="input1" type="text" name="name" placeholder="Name" />
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input class="input1" type="text" name="email" placeholder="Email" />
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Subject is required">
              <input class="input1" type="text" name="subject" placeholder="Subject" />
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="phone no is required">
              <input class="input1" type="text" name="contact" placeholder="phone number" />
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Message is required">
              <textarea class="input1" name="message" placeholder="Message"></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button class="contact1-form-btn">
                <span>
                  Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

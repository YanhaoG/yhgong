import React from "react";
import contact from "../assets/contact.jpg";
import contactMobile from "../assets/contact-mobile.jpg";
import * as resize from "./Resize.js";
import * as info from "./Info.js";
import Footer from "./Footer";
import Navbar from "./NavBar";


function Contact() {

    const imageUrl = resize.useWindowWidth() >= 650 ? contact : contactMobile;

    return (
        <div>
            <Navbar />

            <div className="main" id="contactme" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="container">
                    <div className="row margin">
                        <div className="col-lg-6">
                            <a href="mailto:yanhaogong@gmail.com">
                                <i className="socialicon fas fa-envelope fa-2x"></i></a>
                            <h3 className="space">{info.email}</h3>
                        </div>
                        <div className="col-lg-6">
                            <i className="fas fa-phone-square-alt fa-2x"></i>
                            <h3 className="space">{info.phoneNumber}</h3>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="col-lg-6">
                            <a href="https://www.linkedin.com/in/yanhao-gong-940513/">
                                <i className="socialicon fab fa-linkedin fa-2x"></i></a>
                            <h3 className="space">LinkedIn Profile</h3>
                        </div>
                        <div className="col-lg-6">
                            <a href="https://github.com/YanhaoG">
                                <i className="socialicon fab fa-github-square fa-2x"></i></a>
                            <h3 className="space">GitHub</h3>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
import React from "react";
import Hr from "./Hr";
import edu from "../assets/edu.jpg";
import eduMobile from "../assets/edu-mobile.jpg";
import * as resize from "./Resize.js";
import * as info from "./Info.js";
import Footer from "./Footer";
import Navbar from "./NavBar";



function Education() {

    const imageUrl = resize.useWindowWidth() >= 650 ? edu : eduMobile;

    return (
        <div><Navbar />
            <div className="main" id="edu" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="container">
                    <div className="hover">
                        <h2 className="uni">{info.schoolName}</h2>
                        <p className="edu-detail">{info.eduIntro1}</p>
                        <p className="edu-detail">{info.Date1}</p>
                    </div>
                    <Hr />
                    <div className="hover">
                        <h2 className="uni">{info.schoolName}</h2>
                        <p className="edu-detail">{info.eduIntro2}</p>
                        <p className="edu-detail">{info.Date2}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Education;

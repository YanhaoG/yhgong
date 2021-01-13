import React from "react";
import avatar from "../assets/self.jpg";
import avatarMobile from "../assets/self_mobile.jpg";
import me from "../assets/me.jpg";
import meMobile from "../assets/me-mobile.jpg";
import * as resize from "./Resize.js";
import * as info from "./Info.js";
import Footer from "./Footer";
import Navbar from "./NavBar";




function Me() {

    const imageUrl = resize.useWindowWidth() >= 650 ? me : meMobile;

    const avatarUrl = resize.useWindowWidth() >= 992 ? avatar : avatarMobile;


    return (
        <div>
            <Navbar />
            <div className="main" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-me"> <img className="avatar img-fluid" src={avatarUrl} alt="Avatar" /></div>
                        <div className="col-lg-6 col-me">
                            <h1 className="Name">{info.myName}</h1>
                            <p className="Intro">{info.intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Me;
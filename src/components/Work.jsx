import React from "react";
import work from "../assets/work.jpg";
import workMobile from "../assets/work-mobile.jpg";
import * as resize from "./Resize.js";
import * as info from "./Info.js";
import Footer from "./Footer";
import Navbar from "./NavBar";


function Work() {

    const imageUrl = resize.useWindowWidth() >= 650 ? work : workMobile;


    return (
        <div><Navbar />
            <div className="main" id="work" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="container">
                    <h2 className="job">{info.jobTitle}</h2>
                    <p className="job-detail">{info.jobDetail}</p>
                    <h2 className="skill">Skills</h2>

                    <div className="row margin first">
                        {/* ★★★★ */}
                        <div className="col-lg col-style">
                            <pre>Python       ★★★★</pre>
                        </div>
                        <div className="col-lg col-style">
                            <pre className="tab">JavaScript   ★★★</pre>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="col-lg col-style">
                            <pre className="tab">MATLAB       ★★★★</pre>
                        </div>
                        <div className="col-lg col-style">
                            <pre className="tab">C++          ★★★</pre>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="col-lg col-style">
                            <pre className="tab">React        ★★★</pre>
                        </div>
                        <div className="col-lg col-style">
                            <pre className="tab">Linux        ★★★★</pre>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="col-lg col-style">
                            <pre className="tab">HTML5        ★★★</pre>
                        </div>
                        <div className="col-lg col-style">
                            <pre className="tab">CSS3         ★★★</pre>
                        </div>
                    </div>

                    <div className="row margin">
                        <div className="col-lg col-style">
                            <pre className="tab">SQL          ★★★</pre>
                        </div>
                        <div className="col-lg col-style">
                            <pre className="tab">REST-API     ★★</pre>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Work;
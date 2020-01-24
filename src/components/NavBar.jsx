import React from "react";
import { Link } from "react-router-dom";



function NavBar() {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#titleToggler" aria-controls="titleToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="titleToggler">

                <Link to="/education" className="nav-link">Education</Link>

                <Link to="/work" className="nav-link">Work & Skills</Link>

                <Link to="/" className="nav-link Me">Me.</Link>

                <Link to="/projects" className="nav-link">Projects</Link>

                <Link to="/contactme" className="nav-link">Contact & Links</Link>

            </div>
        </nav>
    );
}

export default NavBar;
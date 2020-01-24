import React from "react";
import projects from "../assets/projects.jpg";
import projectsMobile from "../assets/projects-mobile.jpg";
import Carousel from 'react-bootstrap/Carousel';
import * as resize from "./Resize.js";
import * as info from "./Info.js";
import Footer from "./Footer";
import Navbar from "./NavBar";


const display = (x, y) => {
    let item = [];
    for (var i = 0; i < x.length; i++) {
        item.push(
            <Carousel.Item>
                <h2 className="project">{x[i]}</h2>
                <p className="project-detail">{y[i]}</p>
            </Carousel.Item>
        );
    }
    return item;
}

function Projects() {

    const imageUrl = resize.useWindowWidth() >= 650 ? projects : projectsMobile;


    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    }

    const Name = info.projectName;
    const Detail = info.projectDetail;

    return (
        <div>
            <Navbar />

            <div className="main" id="projects" style={{ backgroundImage: `url(${imageUrl})` }}>

                <div className="container">
                    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} indicators={false} interval={4000}>
                        {display(Name, Detail)}
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;


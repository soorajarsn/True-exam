import React from 'react';
import Navbar from './Navbar';
import "../styles/theme.scss";
import indexHero from "./images/Index.webp";
function Index() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="img-container">
                <img src={indexHero} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Index;

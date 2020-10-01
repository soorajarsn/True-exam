import React from 'react';
import Navbar from './Navbar';
import "../styles/theme.scss";
import indexHero from "./images/Index.jpg";
function Index() {
    return (
        <React.Fragment>
            <Navbar />
            <img src={indexHero} alt="" />
        </React.Fragment>
    )
}

export default Index;

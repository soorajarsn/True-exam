import React from "react";
import Navbar from "./Navbar";
import indexHero from "./images/Index.webp";
import "../styles/index.scss";
import Pricing from "./Pricing";
import Ratings from "./Ratings";
function Index() {
  return (
    <React.Fragment>
      <div className="index-main full-width">
        <Navbar />
        <div className="hero-img-container">
          <img src={indexHero} alt="" />
          <div className="gradient"></div>
        </div>
        <Pricing />
        <Ratings />
      </div>
    </React.Fragment>
  );
}

export default Index;

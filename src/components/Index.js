import React from "react";
import Navbar from "./Navbar";
import indexHero from "./images/Index.webp";
import "../styles/index.scss";
function Index() {
  return (
    <React.Fragment>
      <div className="index-main">
        <Navbar />
        <div className="hero-img-container">
          <img src={indexHero} alt="" />
          <div className="gradient"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;

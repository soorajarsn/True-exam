import React, { useEffect } from "react";
import Navbar from "./Navbar";
import indexHero from "./images/Index.webp";
import "../styles/index.scss";
import Pricing from "./Pricing";
import Ratings from "./Ratings";
import Stories from "./Stories";
import Faqs from "./Faqs";
import Footer from "./Footer";
function Index() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
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
        <Stories />
        <Faqs />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Index;

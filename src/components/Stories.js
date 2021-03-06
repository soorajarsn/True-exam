import React from "react";
import user1 from './images/user9.jpg';
import user2 from './images/user2.jpg';
import user4 from './images/user4.jpg'
function Stories() {
  return (
    <div className="stories-container-main full-width flex">
      <div className="story-container full-width limit-width">
        <h2 className="lg-margin">
          Why we love True Exam
        </h2>
        <div className="stories lg-margin">
          <div className="story md-padding md-padding-left md-padding-right md-margin">
            <p className="bold">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
            <div className="img-name-container">
              <div className="img-container">
                <img src={user1} alt="" />
              </div>
              <div className="name-plan-container">
                <h3>Rishabh Tiwari</h3>
                <div className="plan">Advanced Plan User</div>
              </div>
            </div>
          </div>
          <div className="story md-padding md-padding-left md-padding-right md-margin">
            <p className="bold">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            </p>
            <div className="img-name-container">
              <div className="img-container">
                <img src={user2} alt="" />
              </div>
              <div className="name-plan-container">
                <h3>Mini Agarwal</h3>
                <div className="plan">Comprehensive Plan User</div>
              </div>
            </div>
          </div>
          <div className="story md-padding md-padding-left md-padding-right md-margin">
            <p className="bold">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
            <div className="img-name-container">
              <div className="img-container">
                <img src={user4} alt="" />
              </div>
              <div className="name-plan-container">
                <h3>Prachi Gupta</h3>
                <div className="plan">Comprehensive Plan User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;

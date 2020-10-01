import React from "react";

function Pricing() {
  return (
    <div className="pricing-container-main">
      <div className="pricing-container flex">
        <div className="pricing sm-padding-left sm-padding-right limit-width full-width">
          <h2 className="lg-margin">Select an Editing Plan to get started</h2>
          <p className="md-margin">All Plans provide Tutorials and daily taks to perform</p>
          <div className="plans-container md-margin-top">
            <div className="plans flex flex-column justify-space-between">
              <div className="content lg-padding-left lg-padding-right">
                <div className="header">
                  <hr className="top-hr" />
                  <h3 className="md-margin sm-smaller md-smaller lg-smaller">Basic Plan</h3>
                  <hr className="bottom-hr" />
                </div>
                <ul className="md-margin">
                  <li className="sm-margin">Unlimited Consultation with any speciality</li>
                  <li className="sm-margin">20% Off on prescription medicines</li>
                  <li className="sm-margin">20% Off on tests & checkups</li>
                </ul>
              </div>
              <div className="price">
                <div className="md-margin">
                  2999<span className="smaller">/year</span>
                </div>
                <a href="" className="color-secondary bold">View Plan Details</a>
                <div className="button-container">
                  <button className="button-secondary lg-margin">Buy Plan</button>
                </div>
              </div>
            </div>
            <div className="plans popular-plan flex flex-column justify-space-between">
              <div className="popular-block sm-padding md-padding-left md-padding-right">Popular</div>
              <div className="content lg-padding-left lg-padding-right">
                <div className="header">
                  <hr className="top-hr" />
                  <h3 className="md-margin-top sm-smaller md-smaller lg-smaller">Advanced Plan</h3>
                  <hr className="bottom-hr" />
                </div>
                <ul className="md-margin">
                  <li className="sm-margin">Unlimited Consultation with any speciality</li>
                  <li className="sm-margin">20% Off on prescription medicines</li>
                  <li className="sm-margin">20% Off on tests & checkups</li>
                  <li className="sm-margin">10 Free in-Clinic consulations</li>
                </ul>
              </div>
              <div className="price">
                <div className="md-margin">
                  3999<span className="smaller">/year</span>
                </div>
                <a href="" className="color-secondary bold">View Plan Details</a>
                <div className="button-container">
                  <button className="button-secondary lg-margin">Buy Plan</button>
                </div>
              </div>
            </div>
            <div className="plans comprehensive-plan flex flex-column justify-space-between">
              <div className="content lg-padding-left lg-padding-right">
                <div className="header">
                  <hr className="top-hr" />
                  <h3 className="md-margin-top sm-smaller md-smaller lg-smaller">Comprehensive Plan</h3>
                  <hr className="bottom-hr" />
                </div>
                <ul className="md-margin">
                  <li className="sm-margin">Unlimited Consultation with any speciality</li>
                  <li className="sm-margin">20% Off on prescription medicines</li>
                  <li className="sm-margin">20% Off on tests & checkups</li>
                  <li className="sm-margin">10 Free In-Clinic consultations</li>
                  <li className="sm-margin">2 Master health checkups</li>
                </ul>
              </div>
              <div className="price">
                <div className="md-margin">
                  5999<span>/year</span>
                </div>
                <a href="" className="color-secondary bold">View Plan Details</a>
                <div className="button-container">
                  <button className="button-secondary lg-margin">Buy Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

import React from "react";

function Ratings() {
  return (
    <div className="rating-section-container-main full-width flex">
      <div className="rating-section full-width limit-width">
        <h2 className="lg-margin">Trusted by 10 Lakhs+ users every month</h2>
        <p className="md-margin">TrueExam provides the best guidance to students. We began in 2009 and today we help more than 10 Lakhs learners every month.</p>
        <div className="lg-margin rating-container">
          <div className="rating flex flex-column color-secondary">
            <h3 className="sm-margin">4.5</h3>
            <ul className="flex">
              <li>
                <i aria-hidden="true" className="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" className="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" className="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" className="fa fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt"></i>
              </li>
            </ul>
            <p>1000+ Reviews</p>
          </div>
          <ul className="rating-lines">
            <li className="line-container flex color-secondary lg-margin">
              <span className="bold">5</span>
              <div className="line"></div>
            </li>
            <li className="line-container flex color-secondary lg-margin">
              <span className="bold">4</span>
              <div className="line line-2"></div>
            </li>
            <li className="line-container flex color-secondary lg-margin">
              <span className="bold">3</span>
              <div className="line line-3"></div>
            </li>
            <li className="line-container flex color-secondary lg-margin">
              <span className="bold">2</span>
              <div className="line line-4"></div>
            </li>
            <li className="line-container flex color-secondary lg-margin">
              <span className="bold">1</span>
              <div className="line line-5"></div>
            </li>
          </ul>
        </div>
        <div className="overview-container lg-margin">
          <div className="overview color-secondary flex flex-column bold">
            <i className="fas fa-users"></i>
            <h4 className="sm-margin">2 Crore+</h4>
            <span>Monthly Customers</span>
          </div>
          <div className="overview color-secondary flex flex-column bold">
            <i className="fas fa-user-md"></i>
            <h4 className="sm-margin">100,000+</h4>
            <span>Verified Doctors</span>
          </div>
          <div className="overview color-secondary flex flex-column bold">
            <i className="fas fa-pills"></i>
            <h4 className="sm-margin">10 Lakh+</h4>
            <span>Medicine </span>
          </div>
          <div className="overview color-secondary flex flex-column bold">
            <i className="far fa-calendar"></i>
            <h4 className="sm-margin">5 Crore+</h4>
            <span>Doctor Appointments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;

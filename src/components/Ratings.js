import React from "react";

function Ratings() {
  return (
    <div className="rating-section-container-main full-width flex">
      <div class="rating-section full-width limit-width">
        <h2 className="lg-margin">Trusted by 10 Lakhs+ users every month</h2>
        <p className="md-margin">TrueExam provides the best guidance to students. We began in 2009 and today we help more than 10 Lakhs learners every month.</p>
        <div class="lg-margin rating-container">
          <div class="rating flex flex-column color-secondary">
            <h3 className="sm-margin">4.5</h3>
            <ul className="flex">
              <li>
                <i aria-hidden="true" class="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-star"></i>
              </li>
              <li>
                <i aria-hidden="true" class="fa fa-star"></i>
              </li>
              <li>
                <i class="fas fa-star-half-alt"></i>
              </li>
            </ul>
            <p>1000+ Reviews</p>
          </div>
          <ul class="rating-lines">
            <li class="line-container flex color-secondary lg-margin">
              <span className="bold">5</span>
              <div class="line"></div>
            </li>
            <li class="line-container flex color-secondary lg-margin">
              <span className="bold">4</span>
              <div class="line line-2"></div>
            </li>
            <li class="line-container flex color-secondary lg-margin">
              <span className="bold">3</span>
              <div class="line line-3"></div>
            </li>
            <li class="line-container flex color-secondary lg-margin">
              <span className="bold">2</span>
              <div class="line line-4"></div>
            </li>
            <li class="line-container flex color-secondary lg-margin">
              <span className="bold">1</span>
              <div class="line line-5"></div>
            </li>
          </ul>
        </div>
        <div class="overview-container lg-margin">
          <div class="overview color-secondary flex flex-column bold">
            <i class="fas fa-users"></i>
            <h4 className="sm-margin">2 Crore+</h4>
            <span>Monthly Customers</span>
          </div>
          <div class="overview color-secondary flex flex-column bold">
            <i class="fas fa-user-md"></i>
            <h4 className="sm-margin">100,000+</h4>
            <span>Verified Doctors</span>
          </div>
          <div class="overview color-secondary flex flex-column bold">
            <i class="fas fa-pills"></i>
            <h4 className="sm-margin">10 Lakh+</h4>
            <span>Medicine </span>
          </div>
          <div class="overview color-secondary flex flex-column bold">
            <i class="far fa-calendar"></i>
            <h4 className="sm-margin">5 Crore+</h4>
            <span>Doctor Appointments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;

import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container-main full-width flex lg-margin-top">
      <footer className="limit-width">
        <div className="footer-tablet lg-margin">
          <div className="article-container flex justify-space-between">
            <div>
              <Link to="/assignments">Assignments</Link>
            </div>
            <div>
              <Link to="">Instructors</Link>
            </div>
            <div>
              <Link to="/#faqs">FAQs</Link>
            </div>
            <div>
              <Link to="">Join Us</Link>
            </div>
            <div>
              <Link to="">About</Link>
            </div>
          </div>
          <div className="logo-container"><h2 className="sm-smaller md-smaller lg-smaller">Company Logo</h2></div>
        </div>
        <div className="footer-tablet-end lg-margin">
          <p className="footer-end sm-margin">All Rights Reserved &copy; trueExam 2018</p>
          <div className="sm-margin">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

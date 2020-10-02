import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container-main full-width flex lg-margin-top">
      <footer className="limit-width">
        <div class="footer-tablet lg-margin">
          <div class="article-container flex justify-space-between">
            <div>
              <Link to="">Assignments</Link>
            </div>
            <div>
              <Link to="">Instructors</Link>
            </div>
            <div>
              <Link to="">FAQs</Link>
            </div>
            <div>
              <Link to="">Other Services</Link>
            </div>
            <div>
              <Link to="/">About</Link>
            </div>
          </div>
          <div class="logo-container"><h2 className="sm-smaller md-smaller lg-smaller">Company Logo</h2></div>
        </div>
        <div class="footer-tablet-end lg-margin">
          <p class="footer-end sm-margin">All Rights Reserved &copy; trueExam 2018</p>
          <div className="sm-margin">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-google-plus-g"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
// style={{margin:"0 10px;"}}style="margin:auto 5px;"
function Footer() {
  return (
    <div className="full-width flex">
      <footer className="limit-width">
        <div class="footer-tablet">
          <div class="article-container flex">
            <div>
              <Link to="">Courses</Link>
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
          <div class="logo-container">Company Logo</div>
        </div>
        <div class="footer-tablet-end">
          <p class="footer-end">All Rights Reserved &copy; trueExam 2018</p>
          <div>
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

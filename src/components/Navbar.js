import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  function toggleNav(event) {
    const button = event.currentTarget;
    const id = button.getAttribute("data-target");
    const hidden = document.querySelector(`#${id}`).getAttribute("aria-hidden");
    hidden === "true" ? document.querySelector(`#${id}`).setAttribute("aria-hidden", false) : document.querySelector(`#${id}`).setAttribute("aria-hidden", true);
    button.querySelector("i").classList.toggle("fa-times");
  }
  return (
    <React.Fragment>
      <div className="container nav-container flex">
        <nav className="limit-width full-width">
          <ul className="flex justify-space-between">
            <li className="logo-container">
              <Link to="/">
                <h3 className="smaller">Company Logo</h3>
              </Link>
            </li>
            <li id="nav-hidden" className="button-and-nav-links-container" aria-hidden="true">
              <div className="wrapper flex justify-space-between ">
                <div className="nav-items-container">
                  <ul className="nav-items flex larger-font full-width justify-space-between">
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">Courses</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">Instructors</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">FAQs</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex button-group">
                  <div className={"button-container sm-margin-right" + (props.hideLogin ? " hidden" : "")}>
                    <Link to="/login">
                      <button type="button" className="button-primary">
                        Login
                      </button>
                    </Link>
                  </div>
                  <div className={"button-container sm-margin-left" + (props.hideSignup ? " hidden" : "button-container sm-margin-left")}>
                    <Link to="signup">
                      <button type="button" className="button-secondary">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="lg-hidden">
              <button type="button" data-target="nav-hidden" className="flex" onClick={toggleNav}>
                <i className="fas fa-bars" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

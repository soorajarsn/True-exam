import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  console.log(Link);
  return (
    <React.Fragment>
      <div className="container nav-container">
        <nav className="limit-width">
          <ul className="flex justify-space-between">
            <li className="logo-container">
              <Link to="/"><h3 className="smaller">Company Logo</h3></Link>
            </li>
            <li className="sm-hidden lg-visible nav-items-container">
              <ul className="nav-items flex larger-font full-width justify-space-between">
                  <li className="sm-margin-left sm-margin-right">
                      <Link to="/">Lorem</Link>
                  </li>
                  <li className="sm-margin-left sm-margin-right">
                      <Link to="/">Ipsum</Link>
                  </li>
                  <li className="sm-margin-left sm-margin-right">
                      <Link to="/">FAQs</Link>
                  </li>
                  <li className="sm-margin-left sm-margin-right">
                      <Link to="/">About</Link>
                  </li>
              </ul>
            </li>
            <li className="flex">
                <div className="button-container sm-margin-right">
                    <button type="button" className="button-primary">Login</button>
                </div>
                <div className="button-container sm-margin-left">
                    <button type="button">Register</button>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

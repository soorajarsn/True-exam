import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  console.log(Link);
  return (
    <React.Fragment>
      <div className="container">
        <nav>
          <ul className="flex justify-space-between">
            <li className="logo-container">
              <Link to="/"><h3 className="smaller">Company Logo</h3></Link>
            </li>
            <li className="hidden nav-items-container">
              <ul className="nav-items">
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
                    <button type="button">Login</button>
                </div>
                <div className="button-container sm-margin-left">
                    <button type="button">Login</button>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;

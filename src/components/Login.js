import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/login.scss";
import "../styles/signUp.scss";
export function LoginWithEmail(props) {
  console.log("rendered");
  return (
    <div className="login-container-main full-width flex flex-column">
      <Navbar hideLogin/>
      <div className="main-container flex flex-column full-width limit-width">
        <div className="form-container flex flex-column">
          <h1 className="color-secondary lg-margin">Login</h1>
          <hr />

          <form id="login-form" className="flex flex-column md-padding md-padding-left md-padding-right">
            <div className="field-set">
              <div className="input-container login-with-email lg-margin-top md-margin">
                <input type="email" name="email" placeholder="Enter Email Address" autoComplete="off" />
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="input-container login-with-email md-margin">
                <input type="password" name="password" placeholder="Enter the password" autoComplete="off" />
                <i className="far fa-eye-slash password-eye eye color-secondary"></i>
                <i className="far fa-eye eye password-eye active color-secondary"></i>
              </div>

              <div className="flex justify-space-between lg-margin md-padding-top">
                <Link>
                  <span id="try-another">Try Another Method?</span>
                </Link>
                <span id="forget-password">Forget Password?</span>
              </div>

              <div className="button-container">
                <button type="submit" className="button-primary full-width">Login</button>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </form>

          <p className="redirect">
            Not Registered?<Link to="/signUp">Sign up</Link>
          </p>
        </div>
      </div>

      <p className="copyright">All Rights Reserved. &copy; trueExam 2018</p>
    </div>
  );
}

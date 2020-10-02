import React, { useState, useContext } from "react";
import { Link,Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/login.scss";
import "../styles/signUp.scss";
import Info from "./Info";
import { AuthContext } from "../state/Store";
import { loginUser } from "../state/auth/authActions";
export function LoginWithEmail(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);
  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (error) setError("");
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (error) setError("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !password) setError("All Fields are required");
    else if (!emailpattern.test(email)) setError("Invalid Email");
    else if (password.length < 8) setError("Password too short: Atleast 8 chars");
    else loginUser(auth.dispatch,{email,password});
  }
  function togglePassword() {
    document.querySelector(".fa-eye").classList.toggle("active");
    document.querySelector(".fa-eye-slash").classList.toggle("active");
    if (document.querySelector(`input[name=password] ~ .fa-eye-slash`).classList.contains("active")) {
      document.querySelector(`input[name=password]`).setAttribute("type", "text");
    } else {
      document.querySelector("input[name=password]").setAttribute("type", "password");
    }
  }
  return (
    <React.Fragment>
      {auth.state.userLoggedIn ? (
        <Redirect to={(props.location.state && props.location.state.from) || "/assignments"} />
      ) : (
        <div className="login-container-main full-width flex flex-column">
          <Navbar hideLogin />
          <div className="main-container flex flex-column full-width limit-width">
            <div className="form-container lg-margin lg-padding-left lg-padding-right flex flex-column">
              <h1 className="color-secondary lg-margin">Login</h1>
              <hr />

              <form id="login-form" className="flex flex-column md-padding md-padding-left md-padding-right" onSubmit={handleSubmit}>
                <div className="field-set">
                  <div className="input-container login-with-email lg-margin-top md-margin">
                    <input type="email" name="email" placeholder="Enter Email Address" value={email} onChange={handleEmailChange} autoComplete="off" />
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <div className="input-container login-with-email md-margin">
                    <input type="password" name="password" placeholder="Enter the password" value={password} onChange={handlePasswordChange} autoComplete="off" />
                    <i className="far fa-eye-slash password-eye eye color-secondary" onClick={togglePassword}></i>
                    <i className="far fa-eye eye password-eye active color-secondary" onClick={togglePassword}></i>
                  </div>

                  <div className="flex justify-space-between lg-margin md-padding-top">
                    <Link to="">
                      <span id="try-another">Try Another Method?</span>
                    </Link>
                    <span id="forget-password">Forget Password?</span>
                  </div>

                  <div className="button-container">
                    <button type="submit" className="button-primary full-width">
                      Login
                    </button>
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
          {error && <Info className="error" icon="fa-exclamation" header="Error" info={error} />}
        </div>
      )}
    </React.Fragment>
  );
}

import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, Redirect } from "react-router-dom";
import Info from "./Info";
import { AuthContext } from "../state/Store";
import { signupUser } from "../state/auth/authActions";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [instructor, setInstructor] = useState(false);
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const updateValue = (setter, newValue) => {
    setter(newValue);
    if (error) setError("");
  };
  const handleSubmit = event => {
    if (!name || !email || !password || !confirmPassword || !gender || !dob || !tel || !city || !state || !country) setError("Please Fill in all the fields");
    else if (password.length < 8) setError("Password too short: Atleast 8 chars");
    else if (password !== confirmPassword) setError("Passwords do not match");
    signupUser(auth.dispatch,{ name, email, password, confirmPassword, gender, dob, tel, city, state, country, instructor });
    event.preventDefault();
  };
  const toggleEyeAndPassword = (pswd, name) => {
    document.querySelector(`.${pswd}.fa-eye`).classList.toggle("active");
    document.querySelector(`.${pswd}.fa-eye-slash`).classList.toggle("active");
    if (document.querySelector(`input[name=${name}] ~ .fa-eye-slash`).classList.contains("active")) {
      document.querySelector(`input[name=${name}]`).setAttribute("type", "text");
    } else {
      document.querySelector(`input[name=${name}]`).setAttribute("type", "password");
    }
  };
  const togglePassword = event => {
    toggleEyeAndPassword("password-eye", "password");
  };
  const toggleConfirmPassword = () => {
    toggleEyeAndPassword("confirm-password-eye", "confirmPassword");
  };
  return (
    <React.Fragment>
      {auth.state.userLoggedIn ? (
        <Redirect to={(props.location.state && props.location.state.from) || "/assignments"} />
      ) : (
        <div className="signup-container-main full-width flex flex-column">
          <Navbar hideSignup />
          <div className="main-container flex flex-column full-width limit-width">
            <div className="form-container lg-padding-left lg-padding-right lg-margin flex flex-column">
              <h1 className="color-secondary lg-margin">Sign Up</h1>
              <hr />
              <form id="signup-form" className="md-padding-top" onSubmit={handleSubmit}>
                <div className="field-set">
                  <div className="input-container md-margin">
                    <input type="text" name="name" placeholder="Enter Name" onChange={event => updateValue(setName, event.target.value)} autoComplete="off" />
                  </div>
                  <div className="input-container md-margin">
                    <input type="email" name="email" placeholder="Enter Email" onChange={event => updateValue(setEmail, event.target.value)} autoComplete="off" />
                  </div>
                  <div className="input-container md-margin">
                    <input type="password" name="password" placeholder="Enter Password" onChange={event => updateValue(setPassword, event.target.value)} autoComplete="off" />
                    <i className="far fa-eye-slash password-eye eye color-secondary" onClick={togglePassword}></i>
                    <i className="far fa-eye eye password-eye active color-secondary" onClick={togglePassword}></i>
                  </div>
                  <div className="input-container md-margin">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={event => updateValue(setConfirmPassword, event.target.value)}
                      autoComplete="off"
                    />
                    <i className="far fa-eye eye confirm-password-eye active color-secondary" onClick={toggleConfirmPassword}></i>
                    <i className="far fa-eye-slash eye confirm-password-eye color-secondary" onClick={toggleConfirmPassword}></i>
                  </div>
                  <div className="input-container select-container md-margin">
                    <select name="gender" onChange={event => updateValue(setGender, event.target.value)}>
                      <option value="">Select Your Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="input-container md-margin">
                    <input type="date" name="dob" placeholder="dd/mm/yyyy" min="1940-01-01" max="2020-01-01" onChange={event => updateValue(setDob, event.target.value)} />
                  </div>
                  <div className="input-container md-margin">
                    <input
                      type="tel"
                      name="mobileNumber"
                      pattern="[0-9]{10}||[0-9]{11}||[0-9]{12}"
                      placeholder="Enter 10 digit Phone Number"
                      onChange={event => updateValue(setTel, event.target.value)}
                    />
                  </div>
                  <div className="input-container city-state-input-container flex md-margin">
                    <input
                      type="text"
                      className="sm-margin-right"
                      name="city"
                      placeholder="Enter City"
                      onChange={event => updateValue(setCity, event.target.value)}
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      className="sm-margin-left"
                      name="state"
                      placeholder="Enter State"
                      onChange={event => updateValue(setState, event.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-container select-container md-margin">
                    <select name="country" id="countrySelect" onChange={event => updateValue(setCountry, event.target.value)}>
                      <option value="">Select Your Country</option>
                      <option value="india">India</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                      <option value="england">England</option>
                      <option value="australia">Astralia</option>
                      <option value="china">China</option>
                      <option value="russia">Russia</option>
                    </select>
                  </div>
                  <div className="checkbox-input">
                    <input id="instructor" type="checkbox" name="instructor" onChange={event => setInstructor(!instructor)} />
                    <div className="checkbox">
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <label htmlFor="instructor" className="lg-margin md-margin-left">
                    Are you an Instructor?
                  </label>
                  <div className="button-container">
                    <button type="submit" className="button-primary full-width">
                      SIGN UP
                    </button>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </form>
              <p className="redirect lg-margin">
                Already Registered?<Link to="/login">Login</Link>
              </p>
            </div>
          </div>
          {error && <Info className="error" header="Error" icon="fa-exclamation" info={error} />}
        </div>
      )}
    </React.Fragment>
  );
}

export default Signup;

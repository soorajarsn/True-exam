import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../state/Store";
import noImg from "./images/no-user-img.png";
import { LOGOUT_SUCCESS } from "../state/auth/authConsts";
function Navbar(props) {
  const auth = useContext(AuthContext);
  function toggleNav(event) {
    // const clipBodyHeight = () => {
    //   const body = document.querySelector("body");
    //   body.style.height = "200vh";
    //   body.style.overflow = "hidden";
    // };
    // const unClipBodyHeight = () => {
    //   const body = document.querySelector("body");
    //   body.style.height = "unset";
    //   body.style.overflow = "unset";
    // };
    const button = event.currentTarget;
    const id = button.getAttribute("data-target");
    const hidden = document.querySelector(`#${id}`).getAttribute("aria-hidden");
    // document.querySelector("#nav-hidden").classList.toggle("sm-hidden");
    // document.querySelector("#nav-hidden").classList.toggle("md-hidden");
    // hidden === "true" ? clipBodyHeight() : unClipBodyHeight();
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
            <li id="nav-hidden" className="button-and-nav-links-container flex justify-space-between" aria-hidden="true">
              {/* <div className="wrapper  "> */}
                <div className="nav-items-container">
                  <ul className="nav-items flex larger-font full-width justify-space-between">
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/assignments">Assginments</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">Instructors</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/#faqs">FAQs</Link>
                    </li>
                    <li className="sm-margin-left sm-margin-right">
                      <Link to="/">About</Link>
                    </li>
                  </ul>
                </div>

                {auth.state.userLoggedIn ? (
                  <button type="button" className="profile flex" onClick={()=>auth.dispatch({type:LOGOUT_SUCCESS})}>
                    <div className="profile-img">
                      <img src={noImg} alt="" />
                    </div>
                    <div className="sm-margin-left">
                      <span>Logout</span>
                    </div>
                  </button>
                ) : (
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
                )}
              {/* </div> */}
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

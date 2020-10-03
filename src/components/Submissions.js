import React, { useContext } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "./images/img1.jpg";

function Submissions(props) {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      {!auth.state.userLoggedIn ? (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      ) : (
        <React.Fragment>
          {!auth.state.isInstructor ? (
            <div>Access Denied: Instructor Only Access Permissions</div>
          ) : (
            <div className="assignment-container-main">
              <Navbar />
              <div className="hero full-width">
                <div className="hero-img-container">
                  <img className=" sm-visible md-visible" src={img1} alt="" />
                </div>
                <div className="overlay"></div>
                <div className="content-container container full-width flex">
                  <div className="content flex flex-column limit-width full-width">
                    <h1>Submissions</h1>
                    <span>Home/Assginments/Submissions</span>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Submissions;

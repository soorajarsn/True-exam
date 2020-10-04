import React, { useContext, useEffect } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AssignmentViewInstructor from "./AssignmentViewInstructor";
import AssignmentViewStudent from "./AssignmentViewStudent";
import "../styles/assignment.scss";
import img1 from "./images/img1.jpg";
function Assignments(props) {
  const auth = useContext(AuthContext);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <React.Fragment>
      {!auth.state.userLoggedIn ? (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
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
                <h1>Assignments</h1>
                <span>Home/Assginments</span>
              </div>
            </div>
          </div>
          {(auth.state.isInstructor == 'true' || auth.state.isInstructor == true) ? <AssignmentViewInstructor /> : <AssignmentViewStudent />}
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}

export default Assignments;

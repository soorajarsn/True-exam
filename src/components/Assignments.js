import React, { useContext } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AssignmentViewInstructor from "./AssignmentViewInstructor";
import "../styles/assignment.scss";
import img1 from "./images/img1.jpg";
import AssignmentViewStudent from "./AssignmentViewStudent";
import CreateAssignmentForm from "./CreateAssignmentForm";
function Assignments(props) {
  const auth = useContext(AuthContext);
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
              {/* <img className="hidden sm-visible" src={img2} alt="" /> */}
            </div>
            <div className="overlay"></div>
            <div className="content-container container full-width flex">
              <div className="content flex flex-column limit-width full-width">
                <h1>Assignments</h1>
                <span>Home/Assginments</span>
              </div>
            </div>
          </div>
          <AssignmentViewInstructor />
          {/* <AssignmentViewStudent /> */}
          <Footer />
        </div>
      )}
      <CreateAssignmentForm />
    </React.Fragment>
  );
}

export default Assignments;

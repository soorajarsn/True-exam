import React from "react";
// import { Link } from "react-router-dom";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
function AssignmentViewInstructor() {
  return (
    <div className="assignment-container-instructor-main full-width flex flex-column">
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
      <div className="assignment-create full-width flex">
        <div className="create flex flex-column container full-width limit-width">
          <h2 className="">Create Assignment</h2>
          <div className="button-container lg-margin">
            <button className="button-secondary">Create</button>
          </div>
        </div>
      </div>
      <div className="evaluation-container-main full-width flex">
        <div className="container flex flex-column">
          <div className="evaluation-container lg-padding limit-width full-width">
            <h2>Evaluate</h2>
            <p className="sm-margin">No Submission this Week</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentViewInstructor;

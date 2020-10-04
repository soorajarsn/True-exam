import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "./images/img1.jpg";
import templateAssignments, { getLocalAssignments } from "./templateAssignments";

function SubmissionCard(props) {
  return (
    <div id={props.assignmentId} className="assignment lg-margin assignment-uploaded">
      <div className="content">
        <h2 className="smaller">{props.title}</h2>
        <h3 className="sm-smaller md-smaller lg-smaller lg-margin-top md-padding-top">Instructions</h3>
        <ul className="lg-margin">
          {props.instructions.map((instruction, index) => (
            <li key={index} className="md-margin sm-margin-right">
              {instruction}
            </li>
          ))}
        </ul>
        <div className="flex user-container justify-start">
          <ul className="flex jusitify-start">
            <li className="sm-margin-right">
              <p className="bold">UserId:<span className="sm-margin-left">{props.userId}</span></p>
            </li>
            <li className="sm-margin-left">
              <p className="bold">UserName:<span className="sm-margin-left">{props.userName}</span></p>
            </li>
          </ul>
        </div>
        <div className="flex justify-start score-container">
          <div className="score lg-margin-top flex justify-start lg-margin-right">
            <h3 className="sm-smaller md-smaller lg-smaller no-margin">Current Score:</h3>
            <span className="md-margin-left sm-padding sm-padding-left sm-padding-right md-padding">{props.score}</span>
          </div>
          <div className="lg-margin-left score lg-margin-top flex justify-start">
            <h3 className="sm-smaller md-smaller lg-smaller no-margin">Score this Assignment:</h3>
            {/* <span className="md-margin-left sm-padding sm-padding-left sm-padding-right">{props.score}</span> */}
            <select className="md-margin-left md-padding md-padding-left md-padding-right">
              <option value="1">1</option>
              <option value="2">2</option>
              {/* <option value="Not yet Scored">Not yet scored</option> */}
            </select>
          </div>
        </div>
      </div>
      <div className="uploaded-img-container background-white flex">
        <div className="img-container flex">
          <img src={props.image} alt="assignment-img" />
          <a className="download-edited-img flex" href={props.image} download>
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
function Submissions(props) {
  const auth = useContext(AuthContext);
  const { assignmentId } = props.match.params;
  const [submissions, setSubmissions] = useState([]);
  const [assignment, setAssignment] = useState({});
  useEffect(() => {
    const intialize = asmt => {
      setAssignment(asmt);
      setSubmissions(asmt.submissions || []);
    };
    let asmt = templateAssignments.filter(assignment => assignment.assignmentId === assignmentId);
    if (asmt.length === 1) intialize(asmt[0]);
    else {
      asmt = getLocalAssignments();
      if (asmt.length === 1) intialize(asmt[0]);
    }
  }, []);
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
              <div className="assignment-container-student-main full-width flex flex-column">
                <div className="assignments full-width limit-width flex">
                  <div className="container">
                    {submissions.map(submission => (
                      <SubmissionCard key={submission.userId} {...assignment} {...submission} />
                    ))}
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

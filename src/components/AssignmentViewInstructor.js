import React from "react";
// import { Link } from "react-router-dom";
import img2 from "./images/img1.jpg";
import img1 from "./images/1.jpeg";
import user2 from "./images/user2.jpg";
import user9 from "./images/Index.jpg";
const img = [img1, img2, user2, user9];
function AssignmentViewInstructor() {
  return (
    <div className="assignment-container-instructor-main full-width flex flex-column">
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
          <div className="evaluation-container sm-padding limit-width full-width assignments">
            <h2 className="lg-margin">Evaluate</h2>
            {img.map((image, index) => (
              <div key={index} id={"assignment" + index} className="assignment lg-margin">
                <div className="content">
                  <h2 className="smaller">Assignment {index + 1}</h2>
                  <h3 className="sm-smaller md-smaller lg-smaller lg-margin-top md-padding-top">Instructions</h3>
                  <ul className="lg-margin">
                    <li className="md-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</li>
                    <li className="md-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</li>
                    <li className="md-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</li>
                    <li className="md-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</li>
                    <li className="md-margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</li>
                  </ul>
                  <div className="flex flex-column button-group">
                    <button type="button" className="img-container lg-padding lg-margin-top ">
                      Go to Submissions
                    </button>
                  </div>
                  {/* <div className="score lg-margin-top flex justify-start">
                    <h3 className="sm-smaller md-smaller lg-smaller no-margin">Score:</h3>
                    <span className="md-margin-left sm-padding sm-padding-left sm-padding-right">Not yet Scored</span>
                  </div> */}
                </div>
                <div className="uploaded-img-container flex">
                  <div className="img-container flex"><img src={image}  alt="assignment-img"/></div>
                  {/* <div className="overlay flex">
                    <h1>Nothing yet uploaded</h1>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentViewInstructor;

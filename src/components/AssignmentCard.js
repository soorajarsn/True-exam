import React from "react";
import { Link } from "react-router-dom";
import { getBase64 } from "./CreateAssignmentForm";
import { getLocalAssignments } from "./LocalAssignments";
function AssignmentCard(props) {
  function handleFileChange(event) {
    const fileList = event.target.files;
    const file = fileList[0];
    const targetAssignment = event.target.getAttribute("data-target");
    const imgContainer = document.querySelector(`#${targetAssignment} .uploaded-img-container .img-container`);
    document.querySelector(`#${targetAssignment} .uploaded-img-container`).classList.add("img-uploaded");
    document.querySelector(`#${targetAssignment}`).classList.add("assignment-uploaded");
    imgContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
    imgContainer.appendChild(img);
    const processAssignment = (assignment,base64) => {
      let data = {userId:'UTK239S12',userName:'Mock User',score:'Not yet Scored',image:base64};
      assignment.submissions = [data];
      return assignment;
    }
    getBase64(file).then(base64 => {
      let savedAssignment = getLocalAssignments();
      let target = savedAssignment.map(assignment => (assignment.assignmentId == props.assignmentId && processAssignment(assignment,base64)) || assignment);
      localStorage.setItem('assignments',JSON.stringify(target));
    });
  }
  return (
    <div
      id={props.assignmentId}
      className={"assignment lg-margin " + ((!props.instructorView && props.localStorage && props.submissions && props.submissions.length > 0 && "assignment-uploaded") || "")}>
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
        <div className="flex flex-column button-group">
          <button type="button" className="img-container lg-margin-top ">
            {props.instructorView ? (
              <Link className="lg-padding" to={"/submissions/" + props.assignmentId}>
                Go to Submissions
              </Link>
            ) : (
              <a className="lg-padding" href={props.image} download>
                Download Image Here
              </a>
            )}
          </button>
          {!props.instructorView && (
            <button type="button" className="upload-img lg-margin-top lg-padding">
              <input className="full-width lg-padding" type="file" accept="image/*" data-target={props.assignmentId} onChange={handleFileChange} />
              <span>Upload Edited Image</span>
            </button>
          )}
        </div>
        {!props.instructorView && (
          <div className="score lg-margin-top flex justify-start">
            <h3 className="sm-smaller md-smaller lg-smaller no-margin">Score:</h3>
            <span className={"md-margin-left sm-padding sm-padding-left sm-padding-right "+((props.localStorage && props.submissions && props.submissions[0].score != "Not yet Scored" && "round") || "")}>
              {(props.localStorage && props.submissions && props.submissions[0].score) || "Not yet Scored"}
            </span>
          </div>
        )}
      </div>
      <div className="uploaded-img-container flex">
        <div className="img-container flex">{props.instructorView && <img src={props.image} alt="assignment-img" />}</div>
        {!props.instructorView && props.localStorage && props.submissions && props.submissions.length > 0 && (
          <div className="img-container flex background-white">
            <img src={props.submissions[0].image} alt="" />
          </div>
        )}
        {!props.instructorView && (
          <div className="overlay flex">
            <h1>Nothing yet uploaded</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignmentCard;

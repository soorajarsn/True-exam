import React from "react";
function AssignmentCard(props) {

  function handleFileChange(event) {
    const fileList = event.target.files;
    const file = fileList[0];
    const targetAssignment = event.target.getAttribute('data-target');
    const imgContainer = document.querySelector(`#${targetAssignment} .uploaded-img-container .img-container`);
    document.querySelector(`#${targetAssignment} .uploaded-img-container`).classList.add("img-uploaded");
    document.querySelector(`#${targetAssignment}`).classList.add('assignment-uploaded');
    imgContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = function() {
      URL.revokeObjectURL(this.src);
    }
    imgContainer.appendChild(img);
  }
  return (
    <div id={props.assignmentId} className="assignment lg-margin">
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
          <button type="button" className="img-container lg-padding lg-margin-top ">
            {props.instructorView ? (
              "Go to Submissions"
            ) : (
              <a href={props.image} download>
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
            <span className="md-margin-left sm-padding sm-padding-left sm-padding-right">Not yet Scored</span>
          </div>
        )}
      </div>
      <div className="uploaded-img-container flex">
        <div className="img-container flex">{props.instructorView && <img src={props.image} alt="assignment-img" />}</div>
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

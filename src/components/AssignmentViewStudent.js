import React from "react";
import img2 from "./images/img1.jpg";
import img1 from "./images/1.jpeg";
import user2 from "./images/user2.jpg";
import user9 from "./images/index.jpg";
const img = [img1, img2, user2, user9];
function AssignmentViewStudent() {
  function handleFileChange(event) {
    // console.log(event.target.files);
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
    <div className="assignment-container-student-main full-width flex flex-column">
      <div className="assignments full-width limit-width flex">
        <div className="container">
          {img.map((image, index) => (
            <div key={index} id={"assignment"+index} className="assignment lg-margin">
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
                    <a href={image} download>
                      Download Image Here
                    </a>
                  </button>
                  <button type="button" className="upload-img lg-margin-top lg-padding">
                    <input className="full-width lg-padding" type="file" accept="image/*" data-target={"assignment"+index} onChange={handleFileChange} />
                    <span>Upload Edited Image</span>
                  </button>
                </div>
                <div className="score lg-margin-top flex justify-start">
                  <h3 className="sm-smaller md-smaller lg-smaller no-margin">Score:</h3><span className="md-margin-left sm-padding sm-padding-left sm-padding-right">Not yet Scored</span>
                </div>
              </div>
              <div className="uploaded-img-container flex">
                <div className="img-container flex">
                  {/* <img src={image} alt="" /> */}
                </div>
                <div className="overlay flex">
                  <h1>Nothing yet uploaded</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentViewStudent;

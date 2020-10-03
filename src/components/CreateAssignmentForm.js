import React, { useState, useEffect, useRef } from "react";
import "../styles/createAssignment.scss";
import Info from "./Info";
const useInput = input => {
  //   const [value, setValue] = useState("");
  const inputElement = (
    <div className={"input-container lg-margin" + (input.containerClassName ? input.containerClassName : "")}>
      <input
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        className="lg-padding sm-margin"
        autoComplete="off"
        // value={value}/
        // onChange={event => setValue(event.target.value)}
      />
    </div>
  );
  return inputElement;
};
const createInputs = n => {
  let inputArray = [];
  for (var i = 0; i < n; i++) inputArray.push(useInput({ type: "text", name: "instruction" + (i + 1), placeholder: "Instruction" + (i + 1) }));
  return inputArray;
};
function CreateAssignmentForm(props) {
  const [inputCount, setInputCount] = useState(5);
  const fileInput = useRef(null);
  const [error, setError] = useState("");
  let inputs = createInputs(inputCount);
  const increaseInputCount = () => {
    setInputCount(prev => prev + 1);
  };
  useEffect(() => {
    const clipBodyHeight = () => {
      const body = document.querySelector("body");
      body.style.height = "200vh";
      body.style.overflow = "hidden";
    };
    const unClipBodyHeight = () => {
      const body = document.querySelector("body");
      body.style.height = "unset";
      body.style.overflow = "unset";
    };
    clipBodyHeight();
    return unClipBodyHeight;
  });
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const showError = err => {
    setError(err);
    setTimeout(() => {
      setError("");
    }, 5000);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const fileList = fileInput.current.files;
    const file = fileList[0];
    if (!file) {
      showError("Please Select an Image File");
    } else {
      getBase64(file)
        .then(base64 => {
          let instructions = [];
          let title = document.querySelector("input[name=title]").value;
          if (!title) showError("Assignment title Required");
          else {
            document.querySelectorAll("input[type=text]").forEach(inpt => {
              if (inpt.getAttribute("name") !== "name") {
                let val = inpt.value;
                if (val) instructions.push(val);
              }
            });
            let assignmentId = parseInt(Math.random() * 123128238);
            let savedAssignments = localStorage.getItem("assignments");
            if (!savedAssignments) savedAssignments = [];
            else savedAssignments = JSON.parse(savedAssignments);
            savedAssignments.push({ assignmentId, title, instructions, image: base64 }); //push new assignment
            localStorage.setItem("assignments", JSON.stringify(savedAssignments)); //store new assignments -->> should not store more than one
          }
        })
        .catch(err => {
          showError("Something went wrong, Can't upload file");
        });
    }
  };
  return (
    <div className="assignment-form-container-main flex">
      <div className="container form-container flex">
        <form className="create-assignment-form" onSubmit={handleSubmit}>
          {useInput({ type: "text", placeholder: "Assignment Title", name: "title" })}
          {inputs.map((Input, index) => (
            <div key={index}>{Input}</div>
          ))}
          <div className="add-more-container flex full-width justify-start">
            <button type="button" className="add-more bold md-padding" type="button" onClick={increaseInputCount}>
              Add more Instructions
            </button>
          </div>
          <div className="upload-file-container flex full-width justify-start lg-margin-top">
            <button type="button" className="file-upload-button bold md-padding" type="button">
              Upload Image File
            </button>
            <input ref={fileInput} type="file" accept="image/*" />
          </div>
          <div className="button-group flex lg-margin-top justify-space-between">
            <div className="button-container">
              <button type="button" className="button-secondary full-width" onClick={() => props.setshowCreateForm(false)}>
                Cancel
              </button>
            </div>
            <div className="button-container">
              <button className="button-primary full-width" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
      {error && <Info className="error" header="Error" icon="fa-exclamation" info={error} />}
    </div>
  );
}

export default CreateAssignmentForm;

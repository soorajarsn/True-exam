import React, { useState, useEffect } from "react";
import "../styles/createAssignment.scss";
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
  let inputs = createInputs(inputCount);
  const increaseInputCount = () => {
      setInputCount(prev => prev+1);
  }
  useEffect(()=>{
    const clipHeight = () => {
        const body = document.querySelector('body');
        body.style.height = "200vh";
        body.style.overflow = "hidden";
    }
    const unClipHeight = ()=> {
        const body = document.querySelector('body');
        body.style.height = "unset";
        body.style.overflow = "unset";
    }
    clipHeight();
    return unClipHeight;
  })
  return (
    <div className="assignment-form-container-main flex">
      <div className="container form-container flex">
        <form className="create-assignment-form">
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
            <input type="file" accept="image/*" />
          </div>
          <div className="button-group flex lg-margin-top justify-space-between">
              <div className='button-container'>
                  <button type="button" className="button-secondary full-width" onClick={()=>props.setshowCreateForm(false)}>Cancel</button>
              </div>
              <div className="button-container">
                  <button className="button-primary full-width" type="submit">Create</button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAssignmentForm;

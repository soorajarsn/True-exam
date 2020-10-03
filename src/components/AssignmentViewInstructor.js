import React, { useState, useEffect } from "react";
import img2 from "./images/img1.jpg";
import img1 from "./images/1.jpeg";
import user2 from "./images/user2.jpg";
import indexImg from "./images/Index.jpg";
import CreateAssignmentForm from "./CreateAssignmentForm";
import AssignmentCard from "./AssignmentCard";
const templateInstructions = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
];
export const templateAssignments = [
  {
    assignmentId: "assignment1",
    title: "Assignment Lorem Ipsum",
    image: img1,
    instructions: templateInstructions,
  },
  {
    assignmentId: "assignment2",
    title: "Ipsum Dolor sit",
    image: img2,
    instructions: templateInstructions,
  },
  {
    assignmentId: "assignment3",
    title: "Tempor Dolore Magna",
    image: user2,
    instructions: templateInstructions,
  },
  {
    assignmentId: "assignment4",
    title: "Consectetur Adipisicing",
    image: indexImg,
    instructions: templateInstructions,
  },
];
export const getLocalAssignments = () => {
  const assignments = localStorage.getItem("assignments");
  return JSON.parse(assignments);
};
function AssignmentViewInstructor() {
  const [showCreateForm, setshowCreateForm] = useState(false);
  const [localAssignments, setLocalAssignments] = useState([]);
  useEffect(() => {
    const l = getLocalAssignments();
    if(l) setLocalAssignments(l);
  }, []);
  return (
    <div className="assignment-container-instructor-main full-width flex flex-column">
      <div className="assignment-create full-width flex">
        <div className="create flex flex-column container full-width limit-width">
          <h2 className="">Create Assignment</h2>
          <div className="button-container lg-margin">
            <button className="button-secondary" onClick={() => setshowCreateForm(true)}>
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="evaluation-container-main full-width flex">
        <div className="container flex flex-column">
          <div className="evaluation-container sm-padding limit-width full-width assignments">
            <h2 className="lg-margin">Evaluate</h2>
            {localAssignments.map(assignment => (
              <AssignmentCard key={assignment.assignmentId} {...assignment} instructorView />
            ))}
            {templateAssignments.map((assignment, index) => (
              <AssignmentCard key={index} {...assignment} instructorView />
            ))}
          </div>
        </div>
      </div>
      {showCreateForm && <CreateAssignmentForm setshowCreateForm={setshowCreateForm} />}
    </div>
  );
}

export default AssignmentViewInstructor;

import React, { useState, useEffect } from "react";
import CreateAssignmentForm from "./CreateAssignmentForm";
import AssignmentCard from "./AssignmentCard";
import templateAssignments,{getLocalAssignments} from './templateAssignments';
function AssignmentViewInstructor() {
  const [showCreateForm, setshowCreateForm] = useState(false);
  const [localAssignments, setLocalAssignments] = useState([]);
  const [added, setAdded] = useState(false);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized || added) {
      const l = getLocalAssignments();
      if (l) setLocalAssignments(l);
      setAdded(false);
      setInitialized(true);
    }
  }, [added]);
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
      {showCreateForm && <CreateAssignmentForm setshowCreateForm={setshowCreateForm} setAdded={setAdded} />}
    </div>
  );
}

export default AssignmentViewInstructor;

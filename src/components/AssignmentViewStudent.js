import React, { useState } from "react";
import { templateAssignments, getLocalAssignments } from "./AssignmentViewInstructor";
import AssignmentCard from "./AssignmentCard";
function AssignmentViewStudent() {
  const [localAssignments, setLocalAssignments] = useState([]);
  useEffect(() => {
    const l = getLocalAssignments();
    if(l)setLocalAssignments(l);
  }, []);
  return (
    <div className="assignment-container-student-main full-width flex flex-column">
      <div className="assignments full-width limit-width flex">
        <div className="container">
          {localAssignments.map(assignment => (
            <AssignmentCard key={assignment.assignmentId} {...assignment} />
          ))}
          {templateAssignments.map((assignment, index) => (
            <AssignmentCard key={index} {...assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentViewStudent;

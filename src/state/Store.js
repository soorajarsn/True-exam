import React, { useReducer } from "react";
import { initialAuthState, authReducer } from "./auth/authReducer";
import { assignmentReducer, initialAssignments } from "./assignments/assignmentReducer";
export const AuthContext = React.createContext();
export const AssignmentContext = React.createContext();
function Store(props) {
  const [auth, dispatch] = useReducer(authReducer, initialAuthState);
  const [assignments, dispatchAssignment] = useReducer(assignmentReducer, initialAssignments);
  return (
    <AuthContext.Provider value={{ state: auth, dispatch }}>
      <AssignmentContext.Provider value={{ assignments, dispatchAssignment }}>{props.children}</AssignmentContext.Provider>
    </AuthContext.Provider>
  );
}
export default Store;

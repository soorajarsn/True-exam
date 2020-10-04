import React, { useReducer } from "react";
import { initialAuthState, authReducer } from "./auth/authReducer";
import { assignmentReducer, initialAssignments } from "./assignments/assignmentReducer";
export const AuthContext = React.createContext();
export const AssignmentContext = React.createContext();
function Store(props) {
  const [auth, dispatch] = useReducer(authReducer, initialAuthState);
  const [assignments, dispatch] = useReducer(assignmentReducer, initialAssignments);
  return (
    <AuthContext.Provider value={{ state: auth, dispatch }}>
      <AssignmentContext.Provider value={{ state: assignments, dispatch }}>{props.children}</AssignmentContext.Provider>
    </AuthContext.Provider>
  );
}
export default Store;

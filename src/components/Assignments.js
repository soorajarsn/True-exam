import React, { useContext } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AssignmentViewInstructor from "./AssignmentViewInstructor";
import "../styles/assignment.scss";
function Assignments(props) {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      {!auth.state.userLoggedIn ? (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      ) : (
        <div className="assignment-container-main">
          <Navbar />
          <AssignmentViewInstructor />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}

export default Assignments;

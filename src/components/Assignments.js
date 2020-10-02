import React, { useContext } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Assignments(props) {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      {auth.state.userLoggedIn ? (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      ) : (
        <div className="assigment-container-main">
          <Navbar />
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
}

export default Assignments;

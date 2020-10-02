import React, { useContext } from "react";
import { AuthContext } from "../state/Store";
import { Redirect } from "react-router-dom";

function Assignments(props) {
  const auth = useContext(AuthContext);
  return <React.Fragment>{auth.state.userLoggedIn ? <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> : <div></div>}</React.Fragment>;
}

export default Assignments;

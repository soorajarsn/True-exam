import React from "react";
import "../styles/theme.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./Index";
import { LoginWithEmail } from "./Login";
import Signup from "./Signup";
import Store from "../state/Store";
import Assignments from "./Assignments";
import Submissions from "./Submissions";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact={true} path="/" render={props => <Index {...props} />} />
        <Route exact={true} path="/login/:method?" render={props => <LoginWithEmail {...props} />} />
        <Route exact={true} path="/signup" render={props => <Signup {...props} />} />
        <Route exact={true} path="/assignments" render={props => <Assignments {...props} />} />
        <Route exact={true} path="/submissions/:assignmentId" render={props => <Submissions {...props} />} />
      </Router>
    </React.Fragment>
  );
}
function AppWithStore() {
  return (
    <Store>
      <App />
    </Store>
  );
}

export default AppWithStore;

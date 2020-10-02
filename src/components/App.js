import React from 'react';
import "../styles/theme.scss";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Index';
import { LoginWithEmail } from './Login';
import Signup from './Signup';
function App() {
    return (
        <React.Fragment>
            <Router>
                <Route exact={true} path="/" render={props => <Index {...props} />}/>
                <Route exact={true} path="/login/:method?" render={props => <LoginWithEmail {...props} />} />
                <Route exact={true} path="/signup" render={props => <Signup {...props} />} />
            </Router>
        </React.Fragment>
    )
}

export default App;

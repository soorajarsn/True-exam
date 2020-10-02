import React from 'react';
import "../styles/theme.scss";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Index';
import { LoginWithEmail } from './Login';
function App() {
    return (
        <React.Fragment>
            <Router>
                <Route exact={true} path="/" render={props => <Index {...props} />}/>
                <Route exact={true} path="/login" render={props => <LoginWithEmail {...props} />} />
            </Router>
        </React.Fragment>
    )
}

export default App;

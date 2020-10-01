import React from 'react';
import "../styles/theme.scss";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Index';
function App() {
    return (
        <React.Fragment>
            <Router>
                <Route exact={true} path="/" render={props => <Index {...props} />}/>
            </Router>
        </React.Fragment>
    )
}

export default App;

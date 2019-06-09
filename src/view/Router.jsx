import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const UserTeas = (props) => {
    console.log("In user teas component");
    return(
        <p>Hello routing</p>
    );
};

const routing = (
    <Router>
        <div>
            <Route exact path="/userTeas" component={UserTeas} />
        </div>
    </Router>
);

export default UserTeas;
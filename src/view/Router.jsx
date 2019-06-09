import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


const UserTeas = (props) => {
    console.log("In user teas component");
    const userId = props.match.params.userId;
    return(
        <p>Tea author id is: {userId}</p>
    );
};

export default UserTeas;
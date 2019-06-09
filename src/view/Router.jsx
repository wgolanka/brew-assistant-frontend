import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import CardNoDetails from "../view/CardWithoutDetails";
import {connect} from "react-redux";

function isSameId(userId, authorId){
    return userId === authorId;
}

const UserTeas = (props) => {
    console.log("In user teas component");
    console.log(props.teas);
    const userId = props.match.params.userId;
    return (
        <div className={'container'}>
            <h4 align="center">User with id {userId} added below brews:</h4>
            <Link to="/">Go home</Link>
            <ul>
                {props.teas.filter((tea) => isSameId(tea.author.id, userId)).map((tea, index) => {
                    return (<li key={index} className={'column'}>
                        <CardNoDetails tea={tea} />
                    </li>)
                })}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teas: state.listTeas.teas
    }
};

export default connect(mapStateToProps, null)(UserTeas);

// export default UserTeas;
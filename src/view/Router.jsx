import React from 'react'
import {Route} from 'react-router-dom'
import CardNoDetails from "../view/CardWithoutDetails";
import {connect} from "react-redux";
import SecondNavbar from "./UserBrewsNavbar"
import {actionFetchUserTeas} from "../reduxUtils/actions/actions";
import {userTeas} from "../reduxUtils/actionsType/actionsType";

// function isSameId(userId, authorId){
//     return userId === authorId;
// }

function fetchTeasClick(userId){

}


const UserTeas = (props) => {
    console.log("In user teas component");
    // console.log(props.userTeas);
    const userId = props.match.params.userId;
    // this.props.fetchUserTeas(userId);
    // this.props.fetchUserTeas(userId);
    return (
        <div className={'container'}>
            <SecondNavbar/>
            <button onClick={fetchTeasClick(userId)}>Fetch</button>
            <h4 align="center">User with id {userId} added below brews:</h4>

            <ul>
                {props.userTeas.map((tea, index) => {
                    return (<li key={index} className={'column'}>
                        <CardNoDetails tea={tea} />
                    </li>)
                })}
            </ul>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         teas: state.listTeas.teas
//     }
// };

// export default connect(mapStateToProps, null)(UserTeas);

// export default UserTeas;

const mapStateToProps = (state) => {
    return {
        userTeas: state.listUserTeas.teas
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserTeas: (userId) => dispatch(actionFetchUserTeas(userId)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserTeas);
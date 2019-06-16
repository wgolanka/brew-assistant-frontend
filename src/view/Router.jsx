import React from 'react'
import {Route} from 'react-router-dom'
import CardNoDetails from "../view/CardWithoutDetails";
import {connect} from "react-redux";
import SecondNavbar from "./UserBrewsNavbar"
import {actionFetchUserTeas} from "../reduxUtils/actions/actions";
import {userTeas} from "../reduxUtils/actionsType/actionsType";


class UserTeas extends React.Component {
    constructor() {
        super();

        this.state = {
            userId: 'init userId'
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        console.log('userId: ', userId);
        this.setState({
            userId,
        })
    }

    fetchTeasClick = (userId) => {
        this.props.fetchUserTeas(userId);
    };

    render() {
        // console.log("In user teas component");
        console.log('in render userId', this.state.userId);
        return (
            <React.Fragment>
                <div className={'container'}>
                    <SecondNavbar/>
                    <button onClick={this.fetchTeasClick(this.state.userId)}>Fetch</button>
                    <h4 align="center">User with id {this.state.userId} added below brews:</h4>

                    <ul>
                        {this.props.userTeas.map((tea, index) => {
                            return (<li key={index} className={'column'}>
                                <CardNoDetails tea={tea}/>
                            </li>)
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
};

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
import React from 'react'
import { compose } from "redux";
import { withRouter } from 'react-router'
import CardNoDetails from "../view/CardWithoutDetails";
import {connect} from "react-redux";
import SecondNavbar from "./UserBrewsNavbar"
import {actionFetchUserTeas} from "../reduxUtils/actions/actions";


class UserTeas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId,
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        console.log('userId: ', userId);

        this.setState({
            userId,
        });
        this.props.fetchUserTeas(userId);
    }

    fetchTeasClick = (userId) => {
        console.log('fetchTeasClick');
        this.props.fetchUserTeas(userId);
    };

    render() {
        console.log('in render userId', this.state.userId);

        return (
            <React.Fragment>
                <div className={'container'}>
                    <SecondNavbar/>
                    <h4 align="center">User with id {this.state.userId} added below brews:</h4>

                    <ul>
                        {!!this.props.userTeas.length && this.props.userTeas.map((tea, index) => {
                            return (<li key={index} className={'column'}>
                                <CardNoDetails tea={tea}/>
                            </li>)
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state.listUserTeas.userTeas);
    return {
        userTeas: state.listUserTeas.userTeas
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserTeas: (userId) => dispatch(actionFetchUserTeas(userId)),
    }
};


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(UserTeas);

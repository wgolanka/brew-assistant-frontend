import React from 'react'
import CardNoDetails from "../view/CardWithoutDetails";
import {connect} from "react-redux";
import SecondNavbar from "./UserBrewsNavbar"
import {Link, Route} from 'react-router-dom'

const Brewers = (props) => {
    console.log("In user teas component");
    console.log(props.teas);
    const users = Array.from(new Set(props.teas.map(a => a.author.id))).map(id => {
            return props.teas.find(a => a.author.id === id)
        });

    return (
        <div className={'container'}>
            <SecondNavbar/>
            <h4 align="center">All users. Click to see user teas.</h4>
            <ul>
                {users.map((tea, index) => {
                    const toLink = {
                        pathname: "/userTeas/" + tea.author.id
                    };
                    return (<li key={index} className={'row'}>
                        <Link to={toLink}>{tea.author.name} {tea.author.surname},</Link>
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

export default connect(mapStateToProps, null)(Brewers);

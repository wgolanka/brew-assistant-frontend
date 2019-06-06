import React from 'react';
import { connect } from 'react-redux';
import { actionFetchTeas } from "../reduxUtils/actions/actions";
import Card from "../view/card";
import CardPlus from "../view/cardPlus";
import Form from "../view/form";
import classes from "./Home.css";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            modalOpen: false
        };
    }

    buttonClick = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    };

    fetchTeasClick = () => {
        this.props.fetchTeas();
    };


    render() {
        return (
            <React.Fragment>
                <div className={'container'}>
                    <ul>
                        {this.props.teas.map((tea, index) => {
                            return (<li key={index} className={'row'}>
                                <Card tea={tea} />
                            </li>)
                        })}
                    </ul>
                    <CardPlus/>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                    onClick={this.buttonClick}>
                        Launch demo modal
                    </button>
                    <button type="button" className="btn btn-secondary"
                            onClick={this.fetchTeasClick}>
                        Fetch all teas
                    </button>
                </div>

                {this.state.modalOpen && (<Form show={this.state.modalOpen} handleClose={this.buttonClick}/>)}

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teas: state.listTeas.teas
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeas: () => dispatch(actionFetchTeas()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
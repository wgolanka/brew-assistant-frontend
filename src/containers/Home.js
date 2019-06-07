import React from 'react';
import { connect } from 'react-redux';
import { actionFetchTeas } from "../reduxUtils/actions/actions";
import Card from "../view/card";
import Form from "../view/form";
import classes from "./Home.css";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            addBrewModalOpen: false
        };
    }

    buttonClick = () => {
        this.setState({
            addBrewModalOpen: !this.state.addBrewModalOpen
        })
    };

    fetchTeasClick = () => {
        this.props.fetchTeas();
    };


    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                            onClick={this.buttonClick}>
                        Add Brew
                    </button>
                    <button type="button" className="btn btn-secondary"
                            onClick={this.fetchTeasClick}>
                        Show all brews
                    </button>
                    <button type="button" className="btn btn-secondary">
                        My brews
                    </button>
                </div>
                <div className={'container'}>
                    <ul>
                        {this.props.teas.map((tea, index) => {
                            return (<li key={index} className={'column'}>
                                <Card tea={tea} />
                            </li>)
                        })}
                    </ul>
                </div>

                {this.state.addBrewModalOpen && (<Form show={this.state.addBrewModalOpen} handleClose={this.buttonClick}/>)}

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
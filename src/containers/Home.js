import React from 'react';
import { connect } from 'react-redux';
import { actionFetchTeas } from "../reduxUtils/actions/actions";
import Card from "../view/card";
import Form from "../view/form";
import classes from "./Home.css";
import DetailsModal from "../view/detailsModal";

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            formModalOpen: false,
            detailsModalOpen: false,
            currentTea: ''
        };
    }

    formButtonClick = () => {
        this.setState({
            formModalOpen: !this.state.formModalOpen
        })
    };

    fetchTeasClick = () => {
        this.props.fetchTeas();
    };

    detailsModalClick = (teaName) => {
        this.setState({
            detailsModalOpen: !this.state.detailsModalOpen,
            // currentTea: teaName
        });
    };


    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                            onClick={this.formButtonClick}>
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
                                <Card tea={tea} detailsModalClick={this.detailsModalClick} />
                            </li>)
                        })}
                    </ul>
                </div>

                {this.state.formModalOpen && (<Form show={this.state.formModalOpen}
                                                    handleClose={this.formButtonClick}/>)}

                {this.state.detailsModalOpen && (<DetailsModal show={this.state.detailsModalOpen}
                                                               currentTea="how to pass tea?"
                                                               handleClose={this.detailsModalClick}/>)}

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
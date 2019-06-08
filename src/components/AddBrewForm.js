import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { actionSubmitTea } from "../reduxUtils/actions/actions";
import { ViewAddTea } from "../view/ViewAddTea";

class AddBrewForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            originCountry: '',
            caffeineContent: '',
            description: '',
            imageLink: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.createNewTea(this.state);
    };

    render() {
        return (
            <ViewAddTea
                data={this.state}
                handleClose={this.props.close}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewTea: (newTea) => dispatch(actionSubmitTea(newTea)),
    }
};

export default connect(null, mapDispatchToProps)(AddBrewForm);

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { API } from "../api/API";
import { connect } from 'react-redux';
import {actionSubmitTea} from "../reduxUtils/actions/actions";

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formBrewName: '',
            formBrewOriginCountry: '',
            formCaffeineContent: '',
            formBrewDescription: '',
            formBrewImglink: '',
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
            <form onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBrewName">
                    <Form.Label>How do you name your brew?</Form.Label>
                    <Form.Control
                        type="input"
                        placeholder="My awesome brew"
                        name="formBrewName"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBrewOriginCountry">
                    <Form.Label>What is your brew origin country?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Japan"
                        name="formBrewOriginCountry"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formCaffeineContent">
                    <Form.Label>How much caffeine milligrams your brew has?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="60"
                        name="formCaffeineContent"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBrewDescription">
                    <Form.Label>Any additional description?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Perfect for cold evenings."
                        name="formBrewDescription"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBrewImglink">
                    <Form.Label>What does it look like?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="http:/best-teas.com/tea-image"
                        name="formBrewImglink"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewTea: (newTea) => dispatch(actionSubmitTea(newTea)),
    }
};

export default connect(null, mapDispatchToProps)(MyForm);

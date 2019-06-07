import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { API } from "../api/API";
import { connect } from 'react-redux';
import {actionSubmitTea} from "../reduxUtils/actions/actions";

class MyForm extends React.Component {
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
            <form onSubmit={this.handleSubmit} >
                <Form.Group controlId="name">
                    <Form.Label>How do you name your brew?</Form.Label>
                    <Form.Control
                        type="input"
                        placeholder="My awesome brew"
                        name="name"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="originCountry">
                    <Form.Label>What is your brew origin country?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Japan"
                        name="originCountry"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="caffeineContent">
                    <Form.Label>How much caffeine milligrams your brew has?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="60"
                        name="caffeineContent"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Any additional description?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Perfect for cold evenings."
                        name="description"
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="imageLink">
                    <Form.Label>What does it look like?</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="http:/best-teas.com/tea-image"
                        name="imageLink"
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

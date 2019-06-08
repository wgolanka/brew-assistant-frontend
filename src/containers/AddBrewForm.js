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
                    <FControl placeholder="My awesome brew" name="name" change={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="originCountry">
                    <Form.Label>What is your brew origin country?</Form.Label>
                    <FControl placeholder="Japan" name="originCountry" change={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="caffeineContent">
                    <Form.Label>How much caffeine milligrams your brew has?</Form.Label>
                    <FControl placeholder="60" name="caffeineContent" change={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Any additional description?</Form.Label>
                    <FControl placeholder="Perfect for cold evenings." name="description" change={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="imageLink">
                    <Form.Label>What does it look like?</Form.Label>
                    <FControl placeholder="http:/best-teas.com/tea-image" name="imageLink" change={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

function FControl(props){
    return <Form.Control
        type="input"
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.change}
    />;
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewTea: (newTea) => dispatch(actionSubmitTea(newTea)),
    }
};

export default connect(null, mapDispatchToProps)(MyForm);

import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import { api } from "/Users/wgolanka/Documents/School/sem6/MAS/Project/brew-assistant-frontend/src/api/api.js";

class MyForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = event.target;

        fetch(api.POST_TEA, {
            method: 'POST',
            body: data,
        }).then(
            function (response) {
                console.log("Post AddBrewForm response" + response)
            }
        );
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBrewName">
                    <Form.Label>How do you name your brew?</Form.Label>
                    <Form.Control type="input" placeholder="My awesome brew" />
                </Form.Group>

                <Form.Group controlId="formBrewOriginCountry">
                    <Form.Label>What is your brew origin country?</Form.Label>
                    <Form.Control type="text" placeholder="Japan" />
                </Form.Group>

                <Form.Group controlId="formCaffeineContent">
                    <Form.Label>How much caffeine milligrams your brew has?</Form.Label>
                    <Form.Control type="text" placeholder="60" />
                </Form.Group>

                <Form.Group controlId="formBrewDescription">
                    <Form.Label>Any additional description?</Form.Label>
                    <Form.Control type="text" placeholder="Perfect for cold evenings." />
                </Form.Group>

                <Form.Group controlId="formBrewImglink">
                    <Form.Label>What does it look like?</Form.Label>
                    <Form.Control type="text" placeholder="http:/best-teas.com/tea-image" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default MyForm;
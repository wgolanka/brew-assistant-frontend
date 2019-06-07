import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';


const AddBrewForm = props => {
    console.log('form');

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Brew!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Form>
                        <Form.Group controlId="formBrewName">
                            <Form.Label>How do you name your brew?</Form.Label>
                            <Form.Control type="text" placeholder="My awesome brew" />
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
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={props.handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default AddBrewForm;
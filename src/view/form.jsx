import React  from 'react';
import { Modal, Button } from 'react-bootstrap';


const Form = (props) => {
    console.log('form');
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Brew!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Form goes here</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default Form;
import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import MyForm from "../containers/AddBrewForm"


const AddBrewModal = props => {
    console.log('form');

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Brew!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <MyForm />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default AddBrewModal;
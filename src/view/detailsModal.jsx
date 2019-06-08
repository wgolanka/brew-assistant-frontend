import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import MyForm from "../containers/AddBrewForm"


const DetailsModal = props => {
    console.log('details');

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Who has added this brew</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>This was added by: {props.currentTea}</p>
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

export default DetailsModal;
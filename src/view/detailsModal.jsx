import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import MyForm from "../containers/AddBrewForm"


const DetailsModal = (props) => {
    console.log('details');

    const { author } = props.tea;

    return (
        <Modal show={props.open} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Who has added this brew</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>This was added by: {author.name}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default DetailsModal;
import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom'

const DetailsModal = (props) => {
    console.log('details');

    const { author } = props.tea;
    const authorId = author.id;

    const toLink = {
        pathname: "/userTeas/" + authorId
    };

    return (
        <Modal show={props.open} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Who has added this brew</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>This brew was was added by:
                        <Link to={toLink}> {author.name}</Link>
                    </p>
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
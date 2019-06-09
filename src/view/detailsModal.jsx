import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import MyForm from "../containers/AddBrewForm"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import UserTeas from './Router';
import App from '../App'
import Home from '../containers/Home'

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
                    <Link to="userTeas">This was added by: {author.name}</Link>
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


{/*<Route exact path="/" component={App}>*/}
    {/*<Route path="userTeas" component={UserTeas}/>*/}
{/*</Route>*/}
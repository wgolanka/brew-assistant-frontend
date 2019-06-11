import React from 'react'
import {Container, Link, Nav, Navbar} from 'react-bootstrap'

const MyNavbar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className="nav-container">
                    <Nav className="mr-auto">
                        <div className="navbar-nav mx-auto">
                            <Nav.Link onClick={props.addTea}>Add Brew</Nav.Link>
                            <Nav.Link onClick={props.showAll}>Refresh all</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MyNavbar;
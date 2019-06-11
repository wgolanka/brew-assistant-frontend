import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SecondNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className="nav-container">
                    <Nav className="mr-auto">
                        <div className="navbar-nav mx-auto">
                            <Link to="/">Go back to homepage</Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default SecondNavbar;
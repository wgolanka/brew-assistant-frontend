import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import classes from "./StyledNavbar.css"
import {Link} from 'react-router-dom'

const MyNavbar = (props) => {

    const toLink = {
        pathname: "/users/"
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className="nav-container">
                    <Nav className="mr-auto">
                        <div className="navbar-nav mx-auto">
                            <Link onClick={props.addTea} style={{ color: '#585858' }}>Add Brew&nbsp;&nbsp;</Link>
                            <Link onClick={props.showAll} style={{ color: '#585858' }}>Refresh all&nbsp;&nbsp;</Link>
                            <Link to={toLink} style={{ color: '#585858' }}>Users</Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MyNavbar;
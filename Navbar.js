import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import logo from './images/logo.webp';

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} height={'50px'}style={{ marginLeft: '25px' }} ></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'55px'}}>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link >Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link >Add Address</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/posts">
                        <Nav.Link>Details</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
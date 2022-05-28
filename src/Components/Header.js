import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='headerSection'>
            <Navbar collapseOnSelect expand="lg " >
                <Container>
                    <Navbar.Brand className='logo text-white'>Monirul Islam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-white text-bold' as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white' as={NavLink} to="/about">About</Nav.Link>
                          
                            <Nav.Link className='text-white' as={NavLink} to="/portfolio">Projects</Nav.Link>
                            <Nav.Link className='text-white' as={NavLink} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;